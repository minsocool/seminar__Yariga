/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.pixabay.com','source.unsplash.com'],
  },
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
