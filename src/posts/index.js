// Loads every markdown file in this folder at build time (the site is static, nothing is fetched at runtime).
// Files whose name starts with "_" (like _template.md) are ignored, and so is any post with `draft: true`.
// See _template.md for the front matter format.
import { marked } from 'marked'

const context = require.context('.', false, /^\.\/[^_][^/]*\.md$/)

// Relative image/link paths in a post resolve to public/posts/, e.g. ![x](my-plot.png) -> public/posts/my-plot.png
const renderer = new marked.Renderer()
const isAbsolute = (href) => /^([a-z][a-z0-9+.-]*:|\/|#)/i.test(href)
renderer.image = (href, title, text) => {
    const src = isAbsolute(href) ? href : `${process.env.BASE_URL}posts/${href}`
    return `<img src="${src}" alt="${text || ''}"${title ? ` title="${title}"` : ''} loading="lazy">`
}
renderer.link = (href, title, text) => {
    const external = /^https?:/i.test(href)
    return `<a href="${href}"${title ? ` title="${title}"` : ''}${external ? ' target="_blank" rel="noopener"' : ''}>${text}</a>`
}

function parseFrontMatter(raw) {
    const match = raw.replace(/^\uFEFF/, '').match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
    if (!match) return { meta: {}, body: raw }
    const meta = {}
    match[1].split(/\r?\n/).forEach((line) => {
        const kv = line.match(/^([\w-]+):\s*(.*)$/)
        if (!kv) return
        let value = kv[2].trim().replace(/^["'](.*)["']$/, '$1')
        if (/^\[.*\]$/.test(value)) {
            value = value.slice(1, -1).split(',').map((v) => v.trim().replace(/^["'](.*)["']$/, '$1')).filter(Boolean)
        }
        meta[kv[1]] = value
    })
    return { meta, body: match[2] }
}

function toPost(key) {
    const slug = key.replace(/^\.\//, '').replace(/\.md$/, '')
    const { meta, body } = parseFrontMatter(context(key))
    const filenameDate = (slug.match(/^(\d{4}-\d{2}-\d{2})/) || [])[1]
    const date = meta.date || filenameDate || ''
    const words = body.split(/\s+/).filter(Boolean).length
    return {
        slug,
        title: meta.title || slug,
        date,
        tags: Array.isArray(meta.tags) ? meta.tags : (meta.tags ? [meta.tags] : []),
        summary: meta.summary || '',
        draft: meta.draft === 'true',
        readingMinutes: Math.max(1, Math.round(words / 220)),
        html: marked.parse(body, { renderer, mangle: false, headerIds: true })
    }
}

const posts = context.keys()
    .map(toPost)
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0)) // newest first

export const allPosts = posts
export const findPost = (slug) => posts.find((p) => p.slug === slug)
export const allTags = [...new Set(posts.flatMap((p) => p.tags))].sort()
export const formatDate = (d) => {
    const date = new Date(`${d}T00:00:00`)
    return isNaN(date) ? d : date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })
}
