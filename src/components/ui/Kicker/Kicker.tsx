import type { ReactNode } from "react";

export default function Kicker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mb-4.5 font-mono text-xs tracking-[0.12em] text-gold ${className}`}>{children}</div>;
}
