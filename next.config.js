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
    // mongodb+srv://alokverma749:Y3oZeGgaOWCnlTJT@code-hostel.ys254nj.mongodb.net/?retryWrites=true&w=majority
    // mongodb://0.0.0.0:27017/next-blog
    JWT_SECRET: 'Thisisverystrongsecretlikemoubtainrangeofhimalayas',
    JWT_EXPIRY: '1d'
  }
}

module.exports = nextConfig
