import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
  /** Root margin for the IntersectionObserver (default: "-5% 0px -5% 0px") */
  rootMargin?: string;
  /** Fire only once and never reset (default: true) */
  once?: boolean;
  /** Intersection threshold 0–1 (default: 0) */
  threshold?: number;
}

/**
 * Returns a [ref, isInView] tuple.
 * Attach `ref` to the DOM element you want to observe.
 */
export function useInView<T extends Element = HTMLElement>({
  rootMargin = "-5% 0px -5% 0px",
  once = true,
  threshold = 0,
}: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setIsInView(false);
        }
      },
      { rootMargin, threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [rootMargin, once, threshold]);

  return [ref, isInView] as const;
}
