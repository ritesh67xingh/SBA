/** @type {import('next').NextConfig} */

// Check if we're building for GitHub Pages
const isProduction = process.env.NODE_ENV === 'production';

// For custom domain, we don't need basePath and assetPrefix
// Only use them if deploying to username.github.io/repo-name format
let assetPrefix = '';
let basePath = '';

// Uncomment the lines below ONLY if you're using username.github.io/SBA format
// If you're using a custom domain, keep these commented out
/*
if (isProduction) {
  const repo = 'SBA';
  assetPrefix = `/${repo}`;
  basePath = `/${repo}`;
}
*/

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
