'use client';

import Image from 'next/image';
import { useState } from 'react';

interface MenuImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function MenuImage({ src, alt, className = '' }: MenuImageProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError || !src) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center ${className}`}>
        <div className="text-center text-gray-400">
          <div className="text-2xl mb-1">🍽️</div>
          <p className="text-xs">No Image</p>
        </div>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      onError={() => setImageError(true)}
    />
  );
}