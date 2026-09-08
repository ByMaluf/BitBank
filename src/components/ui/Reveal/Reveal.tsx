import type { ReactNode } from "react";
import { useInView } from "@/components/ui/useInView";

type Props = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  easing?: string;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  duration = 700,
  easing = "cubic-bezier(.2,.7,.2,1)",
  className = "",
}: Props) {
  const { ref, inView } = useInView<HTMLDivElement>({ fallbackMs: 6000 });

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] ${
        inView ? "translate-y-0 opacity-100" : "translate-y-[1.125rem] opacity-0"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms`, transitionDuration: `${duration}ms`, transitionTimingFunction: easing }}
    >
      {children}
    </div>
  );
}
