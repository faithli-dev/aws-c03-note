/** 開發用伺服器：bun run dev（每次請求即時 bundle，改檔案重新整理就生效） */
import { buildSite } from './bundle'

const port = Number(process.env.PORT ?? 5173)

Bun.serve({
  port,
  async fetch(req) {
    const url = new URL(req.url)
    if (url.pathname === '/favicon.ico') return new Response(null, { status: 204 })
    try {
      const { html, ms } = await buildSite()
      return new Response(html, {
        headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'no-store' },
      })
    } catch (err) {
      return new Response(`<pre style="font:12px/1.6 ui-monospace;padding:20px;color:#c00">${String(err)}</pre>`, {
        status: 500,
        headers: { 'content-type': 'text/html; charset=utf-8' },
      })
    }
  },
})

console.log(`dev server → http://localhost:${port}`)
