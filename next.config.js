/** @type {import('next').Config} */

// Check if we're building for GitHub Pages
const isProduction = process.env.NODE_ENV === 'production';

// For GitHub Pages, we need to handle both repo-based and custom domain scenarios
let assetPrefix = '';
let basePath = '';

if (isProduction) {
  // Check if we're deploying to GitHub Pages
  if (process.env.GITHUB_REPOSITORY) {
    const repo = process.env.GITHUB_REPOSITORY.split('/')[1];
    
    // Check if we have a custom domain configured
    // Set USE_CUSTOM_DOMAIN=true in your GitHub repository secrets
    // or environment variables to enable custom domain mode
    if (process.env.USE_CUSTOM_DOMAIN === 'true') {
      assetPrefix = '';
      basePath = '';
    } else {
      assetPrefix = `/${repo}`;
      basePath = `/${repo}`;
    }
  } else {
    // Fallback for local builds
    assetPrefix = '';
    basePath = '';
  }
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
