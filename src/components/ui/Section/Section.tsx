import type { ReactNode } from "react";

type Props = {
  id?: string;
  bg?: string;
  containerClassName?: string;
  children: ReactNode;
};

export default function Section({ id, bg = "", containerClassName = "", children }: Props) {
  return (
    <section id={id} className={`border-b border-line ${bg}`}>
      <div className={`mx-auto max-w-[75rem] px-8 ${containerClassName}`}>{children}</div>
    </section>
  );
}
