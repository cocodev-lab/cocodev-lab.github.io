#!/bin/bash
task_repo_dir="$(cd -- "$(dirname -- "$0")" && pwd)" || exit 1
python3 "$task_repo_dir/scripts/create_tally_draft.py"
task_result=$?
echo
read -r -p "Press Return to close this window."
exit "$task_result"
