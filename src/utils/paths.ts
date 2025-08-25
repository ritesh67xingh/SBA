/**
 * Utility function to get the correct asset path
 * Works with both GitHub Pages repo paths and custom domains
 */

export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // Check if we're in production and have a base path
  if (typeof window !== 'undefined') {
    // Client-side: check if we're on a custom domain or repo path
    const pathname = window.location.pathname;
    
    // If the pathname starts with /SBA (or similar repo name), we need to include it
    if (pathname.startsWith('/SBA')) {
      return `/${cleanPath}`;
    }
    
    // For custom domains, serve from root
    return `/${cleanPath}`;
  }
  
  // Server-side: use the base path from Next.js config
  // This will be handled by Next.js automatically
  return `/${cleanPath}`;
};

/**
 * Get the base path for the current deployment
 */
export const getBasePath = (): string => {
  if (typeof window !== 'undefined') {
    const pathname = window.location.pathname;
    if (pathname.startsWith('/SBA')) {
      return '/SBA';
    }
  }
  return '';
};