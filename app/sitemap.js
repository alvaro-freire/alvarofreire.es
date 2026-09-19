import { getAllPosts } from '@/lib/posts'

const BASE_URL = 'https://alvarofreire.es'

export default function sitemap() {
  // Static routes carry no lastModified: a build timestamp on every page
  // tells crawlers nothing true. Posts do have a real date.
  const routes = ['', '/work', '/about', '/blog', '/contact'].map((route) => ({
    url: `${BASE_URL}${route}`,
  }))

  const posts = getAllPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.date ? new Date(post.date) : new Date(),
  }))

  return [...routes, ...posts]
}
