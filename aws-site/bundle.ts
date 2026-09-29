/** 共用：把專案編譯成單一 HTML 字串（build.ts 寫檔、dev.ts 即時伺服都用這支） */
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { services } from './src/data'

const root = import.meta.dir

export type BuildOutput = {
  html: string
  jsSize: number
  cssSize: number
  ms: number
}

export async function buildSite(): Promise<BuildOutput> {
  const t0 = performance.now()
  const result = await Bun.build({
    entrypoints: [path.join(root, 'src/main.tsx')],
    target: 'browser',
    format: 'iife',
    minify: true,
    define: { 'process.env.NODE_ENV': '"production"' },
  })

  if (!result.success) {
    const details = result.logs.map((l) => String(l)).join('\n')
    throw new Error(`bundle failed:\n${details}`)
  }

  const jsOut = result.outputs.find((o) => o.path.endsWith('.js'))
  const cssOut = result.outputs.find((o) => o.path.endsWith('.css'))
  if (!jsOut) throw new Error('bundle produced no JS output')

  const js = (await jsOut.text()).replace(/<\/script/gi, '<\\/script')
  const css = cssOut ? await cssOut.text() : ''
  const template = await readFile(path.join(root, 'src/index.html'), 'utf-8')

  return {
    html: template.replace('/*!__CSS__*/', () => css).replace('/*!__JS__*/', () => js),
    jsSize: js.length,
    cssSize: css.length,
    ms: performance.now() - t0,
  }
}

/** 內容健檢：抓出打錯的服務 id、重複 id、缺漏欄位 */
export function auditContent(): string[] {
  const ids = new Set(services.map((s) => s.id))
  const warnings: string[] = []
  const seen = new Set<string>()
  const knownCategories = new Set([
    'compute',
    'storage',
    'database',
    'network',
    'security',
    'integration',
    'monitoring',
    'analytics',
    'ml',
    'migration',
  ])

  for (const s of services) {
    if (seen.has(s.id)) warnings.push(`重複 id: ${s.id}`)
    seen.add(s.id)
    if (!knownCategories.has(s.category)) warnings.push(`${s.id} 分類 id 不存在: ${s.category}`)
    if (s.interactions.length === 0) warnings.push(`${s.id} 沒有互動資料`)
    if (s.settings.length === 0) warnings.push(`${s.id} 沒有設定資料`)
    if (s.pricing.rows.length === 0) warnings.push(`${s.id} 沒有價格資料`)
    for (const it of s.interactions) {
      if (!ids.has(it.to)) warnings.push(`${s.id} → 互動指向不存在的服務 id: ${it.to}`)
    }
    for (const r of s.related ?? []) {
      if (!ids.has(r)) warnings.push(`${s.id} related 指向不存在的服務: ${r}`)
    }
  }
  return warnings
}

export { services }
