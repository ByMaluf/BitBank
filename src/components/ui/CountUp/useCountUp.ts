import { useEffect, useRef, useState } from "react";

/**
 * Conta de 0 até `target` quando o elemento referenciado entra na tela; fail-open
 * (sem IntersectionObserver, já nasce no valor final). `done` vira true quando a
 * contagem termina, pra quem quiser encadear outro efeito na sequência.
 */
export function useCountUp(target: number, duration = 1400, delay = 0) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(
    () => (typeof IntersectionObserver === "undefined" ? target : 0),
  );
  const [started, setStarted] = useState(
    () => typeof IntersectionObserver === "undefined",
  );
  const [done, setDone] = useState(
    () => typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    const el = ref.current;
    if (!el || started) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setStarted(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let raf = 0;
    const timeout = window.setTimeout(() => {
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);
        setValue(target * eased);
        if (t < 1) {
          raf = requestAnimationFrame(tick);
        } else {
          setDone(true);
        }
      };
      raf = requestAnimationFrame(tick);
    }, delay);
    return () => {
      window.clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [started, target, duration, delay]);

  return { ref, value, done };
}
