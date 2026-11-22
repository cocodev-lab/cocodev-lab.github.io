#!/usr/bin/env python3
"""Create one private CoCoDev draft; credentials stay in process memory."""

import argparse
from datetime import datetime, timezone
import getpass
import hashlib
import json
import os
from pathlib import Path
import re
import sys
import urllib.error
import urllib.request
import warnings


API_URL = "https://api.tally.so/forms"


class NoRedirect(urllib.request.HTTPRedirectHandler):
    def redirect_request(self, req, fp, code, msg, headers, newurl):
        return None


def read_draft(path):
    data = json.loads(path.read_text(encoding="utf-8"))
    if data.get("status") != "DRAFT":
        raise ValueError("This helper only creates private DRAFT forms.")
    if not isinstance(data.get("blocks"), list) or not data["blocks"]:
        raise ValueError("The draft must contain form blocks.")
    for key in ("hasSelfEmailNotifications", "hasRespondentEmailNotifications", "hasPartialSubmissions"):
        if data.get("settings", {}).get(key) is not False:
            raise ValueError("Email notifications and partial submissions must be disabled.")
    return json.dumps(data, ensure_ascii=False).encode("utf-8")


def save_exclusive(path, data):
    fd = os.open(str(path), os.O_WRONLY | os.O_CREAT | os.O_EXCL, 0o600)
    with os.fdopen(fd, "w", encoding="utf-8") as output:
        json.dump(data, output, ensure_ascii=False, indent=2)
        output.write("\n")
        output.flush()
        os.fsync(output.fileno())


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Validate the local draft without connecting to Tally.")
    args = parser.parse_args()
    repo = Path(__file__).resolve().parents[1]
    body = read_draft(repo / "docs/applications/tally-form-draft.json")
    if args.check:
        print("Basic draft checks passed. No network request made.")
        return 0

    state_dir = repo / ".local/tally"
    receipt = state_dir / "form.json"
    attempt = state_dir / "creation-attempt.json"
    if receipt.exists():
        print("A draft was already created. Open 'Apply to CoCoDev' in your Tally dashboard.")
        return 0
    if attempt.exists():
        print("A previous creation attempt needs checking. Look for 'Apply to CoCoDev' in your Tally dashboard before trying again.")
        return 1
    if not sys.stdin.isatty():
        print("Run this helper in your own Terminal so the API key can be entered privately.")
        return 1

    print("This creates the nine-question 'Apply to CoCoDev' form as a private draft.")
    print("It does not publish the form or contact applicants or referees.")
    print("Paste your Tally API key at the hidden prompt below, then press Return.")
    with warnings.catch_warnings():
        warnings.simplefilter("error", getpass.GetPassWarning)
        try:
            key = getpass.getpass("Tally API key (hidden): ").strip()
        except getpass.GetPassWarning:
            print("Hidden input is unavailable. No request was made.")
            return 1
    if not re.fullmatch(r"[A-Za-z0-9._~+/\-]+=*", key):
        print("The key is empty or contains unexpected characters. No request was made.")
        return 1

    state_dir.mkdir(parents=True, exist_ok=True, mode=0o700)
    save_exclusive(attempt, {
        "attemptedAt": datetime.now(timezone.utc).isoformat(),
        "requestSha256": hashlib.sha256(body).hexdigest(),
    })
    request = urllib.request.Request(API_URL, data=body, method="POST", headers={
        "Authorization": "Bearer " + key,
        "Content-Type": "application/json",
        "Accept": "application/json",
    })
    del key
    # No redirects, no automatic retries, no environment-provided HTTP proxy.
    opener = urllib.request.build_opener(urllib.request.ProxyHandler({}), NoRedirect())
    try:
        with opener.open(request, timeout=30) as response:
            if response.status != 201:
                print("Unexpected response. Check your Tally dashboard before trying again.")
                return 1
            result = json.loads(response.read(2_000_000))
        if not isinstance(result, dict):
            print("The response could not be read. Check your Tally dashboard before trying again.")
            return 1
        form_id = result.get("id")
        if not isinstance(form_id, str) or not re.fullmatch(r"[A-Za-z0-9_\-]+", form_id):
            print("Tally responded, but the form ID could not be read. Check your dashboard before trying again.")
            return 1
        if result.get("status") != "DRAFT":
            print("The form was created, but its status needs review in your Tally dashboard.")
            return 1
        save_exclusive(receipt, {
            "id": form_id,
            "status": "DRAFT",
            "createdAt": datetime.now(timezone.utc).isoformat(),
        })
        print("\nCreated private draft: Apply to CoCoDev")
        print("Form ID:", form_id)
        print("Review it in your Tally dashboard. You can now revoke the temporary API key.")
        print("Google Sheets has not been connected yet.")
        return 0
    except urllib.error.HTTPError as error:
        # Inspect known error markers without echoing private bodies or headers.
        try:
            error_data = json.loads(error.read(8000))
        except (OSError, ValueError):
            error_data = {}
        if not isinstance(error_data, dict):
            error_data = {}
        if error.code == 403 and (error_data.get("error_code") == 1010 or error_data.get("error_name") == "browser_signature_banned"):
            print("Cloudflare blocked this client before authentication (error 1010).")
            print("Do not retry this client. Use Tally's built-in form import instead.")
            print("The API key has not been shown to be invalid.")
        elif error.code in (400, 401, 403, 404, 405, 413, 415, 422, 429):
            attempt.unlink(missing_ok=True)
            print("Tally rejected the request (HTTP %s). No draft was confirmed." % error.code)
            if error.code == 401:
                print("Authentication was rejected. Check the API key in your Tally account.")
            elif error.code == 403:
                print("Access was refused. This status alone does not establish that the key is invalid.")
        else:
            print("The request could not be confirmed. Check your Tally dashboard before trying again.")
        return 1
    except (urllib.error.URLError, TimeoutError, OSError, ValueError):
        print("The request could not be confirmed. Check your Tally dashboard before trying again.")
        return 1
    finally:
        request.remove_header("Authorization")


if __name__ == "__main__":
    try:
        sys.exit(main())
    except (KeyboardInterrupt, EOFError):
        print("\nStopped. If a request had started, check your Tally dashboard before running again.")
        sys.exit(1)
    except (OSError, ValueError):
        print("Could not read the draft or save local setup state. No credentials were saved.")
        sys.exit(1)
