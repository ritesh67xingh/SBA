#!/bin/bash

# Script to switch between custom domain and repo-based GitHub Pages modes

echo "GitHub Pages Domain Mode Switcher"
echo "=================================="
echo ""
echo "Choose your deployment mode:"
echo "1) Custom Domain (assets served from root /)"
echo "2) Repository-based (assets served from /REPO_NAME/)"
echo ""

read -p "Enter your choice (1 or 2): " choice

case $choice in
    1)
        echo "Switching to CUSTOM DOMAIN mode..."
        echo "USE_CUSTOM_DOMAIN=true" > .env.local
        echo "✅ Set USE_CUSTOM_DOMAIN=true"
        echo ""
        echo "To deploy with custom domain:"
        echo "1. Commit and push this change"
        echo "2. In your GitHub repository, go to Settings > Pages"
        echo "3. Set your custom domain"
        echo "4. The next deployment will serve assets from root (/)"
        ;;
    2)
        echo "Switching to REPOSITORY-BASED mode..."
        echo "USE_CUSTOM_DOMAIN=false" > .env.local
        echo "✅ Set USE_CUSTOM_DOMAIN=false"
        echo ""
        echo "To deploy with repository-based URLs:"
        echo "1. Commit and push this change"
        echo "2. Your site will be available at: https://USERNAME.github.io/REPO_NAME/"
        echo "3. Assets will be served from /REPO_NAME/"
        ;;
    *)
        echo "Invalid choice. Please run the script again and choose 1 or 2."
        exit 1
        ;;
esac

echo ""
echo "Next steps:"
echo "1. Review the .env.local file that was created"
echo "2. Commit and push your changes"
echo "3. The GitHub Actions workflow will use this setting for the next deployment"