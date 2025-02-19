/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['media.licdn.com', 'avatars.githubusercontent.com', 'images.unsplash.com'],
  },
}

module.exports = nextConfig 