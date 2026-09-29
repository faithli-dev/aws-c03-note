/** 把網站編譯成單一 standalone HTML：bun run build */
import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { auditContent, buildSite, services } from './bundle'

const kb = (n: number) => `${(n / 1024).toFixed(0)} KB`
const out = path.join(import.meta.dir, 'dist', 'index.html')

const { html, jsSize, cssSize, ms } = await buildSite()
await mkdir(path.dirname(out), { recursive: true })
await writeFile(out, html, 'utf-8')

console.log(`✓ ${path.relative(process.cwd(), out)}`)
console.log(`  HTML ${kb(html.length)}  (JS ${kb(jsSize)} + CSS ${kb(cssSize)})  耗時 ${ms.toFixed(0)}ms`)
console.log(
  `  ${services.length} 個服務 · ${services.reduce((n, s) => n + s.interactions.length, 0)} 條服務互動 · ${services.reduce(
    (n, s) => n + s.settings.length,
    0,
  )} 個設定說明`,
)

const warnings = auditContent()
if (warnings.length) {
  console.log(`\n⚠️  ${warnings.length} 個內容提醒：`)
  for (const w of warnings.slice(0, 50)) console.log(`   - ${w}`)
}
