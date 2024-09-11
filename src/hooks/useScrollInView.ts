import { useEffect, useRef } from "react";

/**
 * 
 * @param className 
 * @param threshold 
 * @returns 
 * 
 * when threshold is viewd, start animation
 * If the threshold is not given, className is added when the 0.1 (10%) of component is viewd.
 */
const useScrollInView = (className: string, threshold: number = 0.1) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      // entry is an object passed as an argument to the callback function of the IntersectionObserver.
      ([entry]) => {
        // entry.isIntersecting indicates whether the target being observed is within the viewport.
        if (entry.isIntersecting) {
          entry.target.classList.add(className);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // Call observer.unobserve(ref.current) to stop observing. This prevents unnecessary observation from continuing and degrading performance.
        observer.unobserve(ref.current);
      }
    };
  }, [className, threshold]);

  return ref;
};

export default useScrollInView;
