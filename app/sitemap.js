import { getAllPosts } from '@/lib/posts'

const BASE_URL = 'https://alvarofreire.es'

export default function sitemap() {
  const routes = ['', '/work', '/about', '/blog', '/contact'].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }))

  const posts = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
  }))

  return [...routes, ...posts]
}
