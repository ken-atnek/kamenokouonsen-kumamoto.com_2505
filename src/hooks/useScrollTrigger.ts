import { useCallback, useEffect, useState } from 'react';

export const useScrollTrigger = <T extends HTMLElement = HTMLElement>() => {
  const [isVisible, setIsVisible] = useState(false);
  const [node, setNode] = useState<T | null>(null);

  const ref = useCallback((el: T | null) => {
    setNode(el);
  }, []);

  useEffect(() => {
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px 0px -100px 0px',
        threshold: 0,
      }
    );

    observer.observe(node);

    return () => {
      observer.unobserve(node);
    };
  }, [node]);

  return { ref, isVisible };
};
