/** @type {import('next').NextConfig} */

// Check if we're building for GitHub Pages
const isGithubActions = process.env.GITHUB_ACTIONS || false;
const isProduction = process.env.NODE_ENV === 'production';

let assetPrefix = '';
let basePath = '';

if (isGithubActions && isProduction) {
  // Extract repo name from GITHUB_REPOSITORY (format: owner/repo)
  const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '') || 'SBA';
  assetPrefix = `/${repo}/`;
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
