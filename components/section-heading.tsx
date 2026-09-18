export function SectionHeading({ eyebrow, title, copy, light = false, align = "left" }: { eyebrow: string; title: string; copy?: string; light?: boolean; align?: "left" | "center" }) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}`}>
      <p className={`eyebrow ${light ? "text-copper" : "text-copper"}`}><span />{eyebrow}</p>
      <h2 className={`section-title mt-4 ${light ? "text-white" : "text-ink"}`}>{title}</h2>
      {copy && <p className={`mt-5 text-base leading-7 ${light ? "text-white/62" : "text-ink/62"}`}>{copy}</p>}
    </div>
  );
}
