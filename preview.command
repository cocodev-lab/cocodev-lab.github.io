#!/bin/bash
set -euo pipefail
cd "$(dirname "$0")"
# Prefer the task-local runtime on this Mac; use the user's normal Node elsewhere.
if [ -x "$PWD/.tools/node-v22.23.5-darwin-arm64/bin/node" ]; then
  export PATH="$PWD/.tools/node-v22.23.5-darwin-arm64/bin:$PATH"
fi
if ! node -e 'const [major,minor,patch]=process.versions.node.split(".").map(Number); process.exit(major>22||(major===22&&(minor>23||(minor===23&&patch>=4)))?0:1)' 2>/dev/null; then
  echo "Please install Node.js 22.23.4 or newer, then run this launcher again."
  exit 1
fi
if [ ! -d node_modules ]; then
  npm ci
fi
exec npm run dev -- --open
