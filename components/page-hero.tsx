import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

export function PageHero({ eyebrow, title, description, image = "/images/hero-construction.png" }: { eyebrow: string; title: string; description: string; image?: string }) {
  return (
    <section className="relative isolate min-h-[460px] overflow-hidden bg-ink text-white">
      <Image src={image} alt="" fill sizes="100vw" className="object-cover opacity-45" priority />
      <div className="absolute inset-0 bg-gradient-to-r from-[#101b25] via-[#101b25]/85 to-transparent" />
      <div className="blueprint-grid absolute inset-0 opacity-[0.07]" />
      <div className="relative mx-auto flex min-h-[460px] max-w-site items-end px-5 pb-16 pt-24 sm:px-8 lg:pb-20">
        <div className="max-w-3xl reveal-up">
          <div className="mb-7 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-white/55">
            <Link href="/" className="transition hover:text-white">Home</Link><ChevronRight className="h-3 w-3" /><span className="text-copper">{eyebrow}</span>
          </div>
          <h1 className="font-display text-5xl font-medium leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">{description}</p>
        </div>
      </div>
    </section>
  );
}
