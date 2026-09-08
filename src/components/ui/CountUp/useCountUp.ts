import { useEffect, useState } from "react";
import { useInView } from "@/components/ui/useInView";

export function useCountUp(target: number, duration = 1400, delay = 0) {
  const { ref, inView: started } = useInView<HTMLSpanElement>({ threshold: 0.3 });
  const [value, setValue] = useState(() => (started ? target : 0));
  const [done, setDone] = useState(started);

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
