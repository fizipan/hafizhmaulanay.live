import { useRef, useEffect, useState } from 'react';

const initialOptions = {
  root: null,
  rootMargin: '0px',
  threshold: [0.05, 0.3, 0.6, 0.95],
};

// typescript useIntersection hook
const useIntersect = (onIntersect: () => void, options = initialOptions, onlyOnce = true) => {
  const [element, setElement] = useState<HTMLElement | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onIntersect();
          if (onlyOnce) observer.current?.disconnect();
        }
      },
      { ...options }
    );

    const { current: currentObserver } = observer;
    if (element) currentObserver.observe(element);

    return () => currentObserver.disconnect();
  }, [element, onIntersect, options, onlyOnce]);

  return setElement;
};

export default useIntersect;
