import { useEffect, useMemo, useState } from "react";
import NumberFlow from "@number-flow/react";
import { useCountUp } from "@/components/ui/CountUp";

type Props = {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
  liveStep?: [number, number];
  liveInterval?: [number, number];
  storageKey?: string;
};

const randomBetween = (min: number, max: number) => min + Math.random() * (max - min);

function readStored(key: string | undefined, fallback: number) {
  if (!key) return fallback;
  try {
    const raw = localStorage.getItem(key);
    const n = raw === null ? NaN : Number(raw);
    return Number.isFinite(n) ? Math.max(n, fallback) : fallback;
  } catch {
    return fallback;
  }
}

function writeStored(key: string | undefined, value: number) {
  if (!key) return;
  try {
    localStorage.setItem(key, String(value));
  } catch {}
}

export default function LiveCountUp({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1400,
  delay = 0,
  liveStep = [1, 4],
  liveInterval = [1800, 4200],
  storageKey,
}: Props) {
  const effectiveTarget = useMemo(() => readStored(storageKey, target), [storageKey, target]);
  const { ref, value, done } = useCountUp(effectiveTarget, duration, delay);
  const [liveValue, setLiveValue] = useState(effectiveTarget);

  useEffect(() => {
    if (!done) return;
    let timeout = 0;
    const tick = () => {
      setLiveValue((v) => {
        const next = v + randomBetween(liveStep[0], liveStep[1]);
        writeStored(storageKey, next);
        return next;
      });
      timeout = window.setTimeout(tick, randomBetween(liveInterval[0], liveInterval[1]));
    };
    timeout = window.setTimeout(tick, randomBetween(liveInterval[0], liveInterval[1]));
    return () => window.clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps -- liveStep/liveInterval são fixos por instância
  }, [done, storageKey]);

  if (!done) {
    return (
      <span ref={ref}>
        {prefix}
        {value.toLocaleString("pt-BR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
        {suffix}
      </span>
    );
  }

  return (
    <span ref={ref}>
      <NumberFlow
        value={liveValue}
        locales="pt-BR"
        format={{ minimumFractionDigits: decimals, maximumFractionDigits: decimals }}
        prefix={prefix}
        suffix={suffix}
      />
    </span>
  );
}
