import { useEffect, useRef, useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  easing?: string;
  className?: string;
};

/**
 * Entrada ao rolar com fail-open: se IntersectionObserver não existir,
 * o conteúdo já nasce visível — nunca fica preso em opacity 0.
 * Duration/easing default ao par usado no Hero; as demais seções do design
 * usam "ease" simples a 600-700ms (ver call sites).
 */
export default function Reveal({
  children,
  delay = 0,
  duration = 700,
  easing = "cubic-bezier(.2,.7,.2,1)",
  className = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(
    () => typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;
    if (el.getBoundingClientRect().top < window.innerHeight * 0.95) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.04 },
    );
    io.observe(el);
    const fallback = window.setTimeout(() => setShown(true), 6000);
    return () => {
      io.disconnect();
      window.clearTimeout(fallback);
    };
  }, [shown]);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] ${
        shown ? "translate-y-0 opacity-100" : "translate-y-[1.125rem] opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms`, transitionTimingFunction: easing }}
    >
      {children}
    </div>
  );
}
