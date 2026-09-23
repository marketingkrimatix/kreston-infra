import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-copper text-white">
      <div className="blueprint-grid absolute inset-0 opacity-10" />
      <div className="relative mx-auto flex max-w-site flex-col gap-8 px-5 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:py-16">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/65">Looking ahead?</p>
          <h2 className="mt-3 max-w-3xl font-display text-3xl font-medium tracking-[-0.035em] sm:text-4xl lg:text-5xl">Let’s develop what’s next, together.</h2>
        </div>
        <Link href="/contact" className="inline-flex shrink-0 items-center justify-center gap-3 bg-white px-6 py-4 text-sm font-bold text-ink transition hover:bg-ink hover:text-white">Start a conversation <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </section>
  );
}
