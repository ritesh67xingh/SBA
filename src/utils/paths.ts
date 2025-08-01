// Utility function to handle asset paths for GitHub Pages
export const getAssetPath = (path: string): string => {
  // In development or when not using basePath, return the original path
  if (typeof window !== 'undefined') {
    // Client-side: check if we have a basePath
    const basePath = (window as any).__NEXT_DATA__?.basePath || '';
    return basePath + path;
  }
  
  // Server-side: use environment variables
  const isGithubActions = process.env.GITHUB_ACTIONS || false;
  const isProduction = process.env.NODE_ENV === 'production';
  
  if (isGithubActions && isProduction) {
    const repo = process.env.GITHUB_REPOSITORY?.replace(/.*?\//, '') || 'SBA';
    return `/${repo}${path}`;
  }
  
  return path;
};