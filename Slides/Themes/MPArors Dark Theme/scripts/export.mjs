import { existsSync } from 'node:fs'
import { spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const args = process.argv.slice(2)
const entry = args[0] && !args[0].startsWith('-') ? args.shift() : 'slides.md'
const candidates = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  `${process.env.PROGRAMFILES || 'C:/Program Files'}/Google/Chrome/Application/chrome.exe`,
]
const browser = candidates.find(existsSync)
const cli = fileURLToPath(new URL('../node_modules/@slidev/cli/bin/slidev.mjs', import.meta.url))
const options = ['export', entry, '--output', 'lesson.pdf', '--wait', '500', ...args]
if (browser && !args.includes('--executable-path')) options.push('--executable-path', browser)
const result = spawnSync(process.execPath, [cli, ...options], { stdio: 'inherit' })
if (result.error) console.error(result.error.message)
process.exit(result.status ?? 1)
