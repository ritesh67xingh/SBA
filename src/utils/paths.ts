// Utility function to handle asset paths for GitHub Pages
export const getAssetPath = (path: string): string => {
  // In development or when not using basePath, return the original path
  if (typeof window !== 'undefined') {
    // Client-side: check if we have a basePath
    const basePath = (window as any).__NEXT_DATA__?.basePath || '';
    return basePath + path;
  }
  
  // Server-side: use environment variables
  const isProduction = process.env.NODE_ENV === 'production';
  
  if (isProduction) {
    // Always use SBA as the repo name for production builds
    const repo = 'SBA';
    return `/${repo}${path}`;
  }
  
  return path;
};

// Simplified asset path function for images
export const getImagePath = (path: string): string => {
  // For GitHub Pages, we need to handle the base path correctly
  const isProduction = process.env.NODE_ENV === 'production';
  
  if (isProduction) {
    const repo = 'SBA';
    return `/${repo}${path}`;
  }
  
  // In development, check if we have a basePath from window
  if (typeof window !== 'undefined') {
    const basePath = (window as any).__NEXT_DATA__?.basePath || '';
    return basePath + path;
  }
  
  return path;
};