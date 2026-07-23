import { useState, useEffect, useRef, RefObject } from 'react';

export const useInView = (options?: IntersectionObserverInit): [RefObject<HTMLDivElement | null>, boolean] => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      // Toggle view state based on visibility and tab focus
      const tabVisible = document.visibilityState === 'visible';
      setIsInView(entry.isIntersecting && tabVisible);
    }, options);

    observer.observe(el);

    // Re-check on tab focus / visibility changes
    const handleVisibilityChange = () => {
      if (document.visibilityState !== 'visible') {
        setIsInView(false);
      } else {
        // Force evaluation
        observer.unobserve(el);
        observer.observe(el);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [options]);

  return [containerRef, isInView];
};

export default useInView;
