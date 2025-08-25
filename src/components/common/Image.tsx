import React from 'react';
import { getAssetPath } from '../../utils/paths';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt, className, ...props }) => {
  // Handle different types of image sources
  const getImageSrc = (imageSrc: string): string => {
    // If it's already an absolute URL, return as is
    if (imageSrc.startsWith('http://') || imageSrc.startsWith('https://')) {
      return imageSrc;
    }
    
    // If it's a relative path starting with /, use our utility
    if (imageSrc.startsWith('/')) {
      return getAssetPath(imageSrc);
    }
    
    // If it's a relative path without /, add it
    return getAssetPath(`/${imageSrc}`);
  };

  return (
    <img
      src={getImageSrc(src)}
      alt={alt}
      className={className}
      {...props}
    />
  );
};