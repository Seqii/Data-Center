#!/bin/zsh
cd "${0:A:h}"
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
if ! command -v npm >/dev/null 2>&1; then
  print 'Install Node.js 22.12 or newer, then open this launcher again.'
  read '?Press Enter to close.'
  exit 1
fi
if [[ ! -d node_modules/@slidev/cli ]]; then
  npm ci || { read '?Installation failed. Press Enter to close.'; exit 1; }
fi
npm run dev
if [[ $? -ne 0 ]]; then
  read '?The preview could not start. Check the message above. Press Enter to close.'
fi
