import { useState, useEffect, useDebugValue } from 'react';

function useScreenSize() {
  const [screenSize, setScreenSize] = useState({ width: 0, height: 0, size: '' });

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      const height = window.innerHeight;
      let size;
      if (width < 768) {
        size = 'small'; 
      } else if (width < 1200) {
        size = 'medium'; 
      } else {
        size = 'large'; 
      }
      setScreenSize({ width, height, size });
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useDebugValue(screenSize ? `Screen Size: ${screenSize.width}x${screenSize.height} (${screenSize.size})` : 'Loading...');

  return screenSize;
}

export default useScreenSize;
