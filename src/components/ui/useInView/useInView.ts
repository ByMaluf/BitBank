import { useEffect, useRef, useState } from "react";

type Options = {
  rootMargin?: string;
  threshold?: number;
  fallbackMs?: number;
};

export function useInView<T extends Element>({
  rootMargin = "0px 0px -8% 0px",
  threshold = 0.04,
  fallbackMs,
}: Options = {}) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(() => typeof IntersectionObserver === "undefined");

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin, threshold },
    );
    io.observe(el);
    const fallback = fallbackMs ? window.setTimeout(() => setInView(true), fallbackMs) : undefined;
    return () => {
      io.disconnect();
      if (fallback) window.clearTimeout(fallback);
    };
  }, [inView, rootMargin, threshold, fallbackMs]);

  return { ref, inView };
}
