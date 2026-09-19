/** @type {import('next').NextConfig} */
const nextConfig = {
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
