# GitHub Pages Custom Domain Setup Guide

## Problem Description
When you switch from GitHub Pages with repository-based URLs (e.g., `username.github.io/repo-name`) to a custom domain, your assets (images, CSS, JS) may break because they're still referencing the old repository-based paths.

## Solution
This project now includes a configuration system that automatically handles both scenarios:

1. **Repository-based URLs**: Assets served from `/REPO_NAME/`
2. **Custom Domain**: Assets served from root `/`

## Quick Fix

### Option 1: Use the Script (Recommended)
```bash
./scripts/switch-domain-mode.sh
```
Choose option 1 for custom domain mode.

### Option 2: Manual Configuration
1. Edit `.github/workflows/nextjs.yml`
2. Change `USE_CUSTOM_DOMAIN: false` to `USE_CUSTOM_DOMAIN: true`
3. Commit and push

## How It Works

### Next.js Configuration (`next.config.js`)
The configuration automatically detects your deployment mode:
- **Custom Domain**: `basePath = ""` and `assetPrefix = ""`
- **Repository-based**: `basePath = "/REPO_NAME"` and `assetPrefix = "/REPO_NAME"`

### GitHub Actions Workflow
The workflow uses the `USE_CUSTOM_DOMAIN` environment variable to determine the build mode.

## Setup Steps

### 1. Enable Custom Domain Mode
```bash
./scripts/switch-domain-mode.sh
# Choose option 1 (Custom Domain)
```

### 2. Configure Custom Domain in GitHub
1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. In the **Custom domain** field, enter your domain (e.g., `example.com`)
4. Check **Enforce HTTPS** if available
5. Click **Save**

### 3. Deploy
1. Commit and push your changes
2. The GitHub Actions workflow will automatically build with custom domain settings
3. Your assets will now be served from the root path

## Verification

After deployment, check that:
- Images load correctly from your custom domain
- CSS and JavaScript files are accessible
- No 404 errors for assets

## Switching Back

If you need to switch back to repository-based URLs:
```bash
./scripts/switch-domain-mode.sh
# Choose option 2 (Repository-based)
```

## Troubleshooting

### Images Still Not Loading
1. Check browser developer tools for 404 errors
2. Verify the image paths in your components
3. Ensure the deployment used the correct mode

### Build Errors
1. Check GitHub Actions logs
2. Verify environment variables are set correctly
3. Ensure `USE_CUSTOM_DOMAIN` is set to `true` for custom domains

### DNS Issues
1. Verify your DNS records point to GitHub Pages
2. Check that your custom domain is properly configured in GitHub
3. Allow up to 24 hours for DNS propagation

## File Structure
```
├── .github/workflows/nextjs.yml    # GitHub Actions workflow
├── next.config.js                  # Next.js configuration
├── scripts/switch-domain-mode.sh   # Domain mode switcher
└── src/
    ├── components/                 # React components
    ├── utils/paths.ts             # Asset path utilities
    └── ...
```

## Environment Variables

| Variable | Value | Description |
|----------|-------|-------------|
| `USE_CUSTOM_DOMAIN` | `true` | Enable custom domain mode |
| `USE_CUSTOM_DOMAIN` | `false` | Enable repository-based mode |

## Support
If you continue to experience issues:
1. Check the GitHub Actions build logs
2. Verify your custom domain configuration
3. Ensure all changes are committed and pushed