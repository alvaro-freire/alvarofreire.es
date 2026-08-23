/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  async redirects() {
    return [
      {
        source: '/services',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
