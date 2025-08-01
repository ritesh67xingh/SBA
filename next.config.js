/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/SBA/' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/SBA' : ''
}

module.exports = nextConfig
