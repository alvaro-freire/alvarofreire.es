import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const POSTS_DIR = path.join(process.cwd(), 'content', 'posts')

/**
 * Reads all posts from content/posts at build time.
 * Frontmatter: title, date (YYYY-MM-DD), description, draft (optional).
 * Drafts are excluded everywhere. Slug = filename without extension.
 */
export function getAllPosts() {
  if (!fs.existsSync(POSTS_DIR)) return []

  return fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.mdx?$/, '')
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8')
      const { data, content } = matter(raw)
      return {
        slug,
        title: data.title || slug,
        date: data.date || null,
        description: data.description || '',
        draft: Boolean(data.draft),
        content,
      }
    })
    .filter((post) => !post.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getPostBySlug(slug) {
  return getAllPosts().find((post) => post.slug === slug) || null
}

export function formatDate(date) {
  if (!date) return ''
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  })
}
