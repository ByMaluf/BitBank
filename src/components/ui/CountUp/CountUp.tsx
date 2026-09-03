import { useCountUp } from "./useCountUp";

type Props = {
  target: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
};

export default function CountUp({
  target,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 1400,
  delay = 0,
}: Props) {
  const { ref, value } = useCountUp(target, duration, delay);

  return (
    <span ref={ref}>
      {prefix}
      {value.toLocaleString("pt-BR", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
      {suffix}
    </span>
  );
}
