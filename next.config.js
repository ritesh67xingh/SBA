/** @type {import('next').NextConfig} */

// Check if we're building for GitHub Pages
const isProduction = process.env.NODE_ENV === 'production';

// For GitHub Pages, we always need the basePath and assetPrefix in production
let assetPrefix = '';
let basePath = '';

if (isProduction) {
  // Always use SBA as the repo name for production builds
  const repo = 'SBA';
  assetPrefix = `/${repo}`;
  basePath = `/${repo}`;
}

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  assetPrefix: assetPrefix,
  basePath: basePath
}

module.exports = nextConfig
