'use client';

import { useEffect, useState } from 'react';

export default function ResponsivenessTester() {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenSize({ width, height });
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
      setIsDesktop(width >= 1024);
    };

    updateScreenSize();
    window.addEventListener('resize', updateScreenSize);

    return () => window.removeEventListener('resize', updateScreenSize);
  }, []);

  // Only show in development
  if (process.env.NODE_ENV !== 'development') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 text-white p-2 rounded-lg text-xs z-50">
      <div>Screen: {screenSize.width} × {screenSize.height}</div>
      <div className={`${isMobile ? 'text-green-400' : 'text-gray-400'}`}>
        Mobile: {isMobile ? '✓' : '✗'}
      </div>
      <div className={`${isTablet ? 'text-green-400' : 'text-gray-400'}`}>
        Tablet: {isTablet ? '✓' : '✗'}
      </div>
      <div className={`${isDesktop ? 'text-green-400' : 'text-gray-400'}`}>
        Desktop: {isDesktop ? '✓' : '✗'}
      </div>
    </div>
  );
}
