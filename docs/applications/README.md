# CoCoDev application form — draft

The user supplied the published Tally form URL https://tally.so/r/X54Yad. The local website now embeds that form at `/apply/`; the red **Apply here** button under GLAD recruitment opens this page. The old `/apply-preview/` route redirects to `/apply/`. Website changes remain local and have not been deployed. Google Sheets synchronization has not been verified.

## Applicant-facing content

**Apply to CoCoDev**

Tell us about the opportunity you are interested in and the questions you would like to work on.

| Question | Format | Required |
| --- | --- | --- |
| Full name | Short text | Yes |
| Email address | Email address | Yes |
| Position you are interested in | Dropdown | Yes |
| Current institution or employer (optional) | Short text | No |
| Why would you like to join CoCoDev, and what would you ideally like to work on? | Long text | Yes |
| Earliest start date and availability (optional) | Short text | No |
| CV (PDF, up to 10 MB) | One PDF, up to 10 MB | Yes |
| Recommender’s name | Short text | Yes |
| Recommender’s email address | Email address | Yes |

**Position options:** PhD; research engineer; postdoctoral research; master’s project or internship; research visit.

**Motivation guidance:** About 300 words. Describe the questions you would like to investigate, why they interest you, and how they connect with CoCoDev’s research.

**Availability guidance:** Include your preferred start date and, for a project or visit, its proposed duration.

**Recommender guidance:** An academic or professional referee familiar with your work. Collecting their details does not automatically contact them or request a letter.

## Setup — use Tally’s built-in import

The Python helper received HTTP 403. An unauthenticated check of the documented API returned Cloudflare error 1010 (`browser_signature_banned`) before authentication. The cause of the user’s original response was not retained, so it cannot be independently identified from that status alone. Do not assume the API key is invalid, and do not retry the blocked client or alter its browser signature.

1. In Tally, click **+ New form → Import from** and choose a file.
2. Upload **cocodev-application-form.md** from this folder. Tally supports Markdown imports and opens the generated draft in its builder. This file contains the nine questions and their input types, with no credentials or applicant data.
3. Review the draft: confirm all nine questions, the dropdown options, required fields, and the one-PDF/10-MB CV limit. Confirm that setup instructions at the bottom of the file have not become applicant questions, and that email notifications and partial submissions are off.
4. Publish the reviewed form when ready. Open **Integrations → Google Sheets → Connect**, authorize the Google account that should own the responses, and create **CoCoDev applications** through the integration.
5. Keep the response spreadsheet’s general access **Restricted**. File links exported by Tally can be opened by anyone who holds the link, so the spreadsheet and its CV links must stay private.
6. Make one clearly labeled test submission with a dummy PDF. Verify all answers and the CV link arrive in the Sheet, then remove the test submission and its Sheet row.
7. Add the verified public form link to the local Join us page for review. Deploy the website only when requested.

The temporary API key is not needed for this route and can be revoked in Tally’s API-key settings. No credentials belong in this folder, the website source, or chat.

The native integration creates and maps the response columns. Optional review columns such as **Status** and **Notes** can be added afterward; no separate spreadsheet is required before connecting.

`tally-form-draft.json` and `scripts/create_tally_draft.py` remain as development references. The script creates a draft only if explicitly run with authentication. The built-in import is the preferred route for this setup.

## Sources

- [Import forms from files](https://tally.so/help/import)
- [Create forms with Tally AI](https://tally.so/help/free-ai-form-builder)
- [Cloudflare error 1010](https://developers.cloudflare.com/support/troubleshooting/http-status-codes/cloudflare-1xxx-errors/error-1010/)
- [API key setup](https://developers.tally.so/api-reference/api-keys)
- [Tally form creation API](https://developers.tally.so/api-reference/endpoint/forms/post)
- [Google Sheets integration](https://tally.so/help/google-sheets-integration)
- [File uploads and exported file-link access](https://tally.so/help/file-uploads)

API request structure checked against the official OpenAPI schema on 2026-11-22. Creating the form and testing the integration still require the owning account.
