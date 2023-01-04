/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
        port: '',
        pathname: '/random/**',
      },
    ],
  },
  env: {
    mongodburl: "mongodb://0.0.0.0:27017/next-blog",
  }
}

module.exports = nextConfig
