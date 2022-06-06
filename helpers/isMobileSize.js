import { useCallback, useState } from 'react';

export const UseIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  const getCurrentWidth = useCallback(() => {
    if (window.innerWidth <= 900) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
    const callback = (e) => {
      if (e.target.innerWidth <= 900) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener('resize', callback);
  }, []);

  return [isMobile, getCurrentWidth];
};
