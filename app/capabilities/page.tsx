import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { capabilities } from "@/lib/data";

export const metadata: Metadata = {
  title: "Why Kreston",
  description: "Explore Kreston's strengths in strategic location selection, efficient design, quality control, project governance, and long-term value.",
};

const stages = [
  { number: "01", title: "Identify & plan", description: "Select promising locations and optimize land potential through strategic planning." },
  { number: "02", title: "Design & coordinate", description: "Shape efficient developments aligned with modern residential needs and strong project governance." },
  { number: "03", title: "Execute & deliver", description: "Maintain quality and timeline control through disciplined execution and delivery." },
];

export default function CapabilitiesPage() {
  return (
    <>
      <PageHero eyebrow="Why Kreston" title="Value begins long before the build." description="From location strategy to coordinated delivery, Kreston takes a development-led approach to long-term usability and asset value." image="/images/technical-planning.png" />
      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-site gap-14 px-5 sm:px-8 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="Key strengths" title="Considered at every stage." copy="Kreston follows a structured, process-driven approach to support quality, coordination, and reliable execution across the development lifecycle." />
            <div className="relative mt-10 aspect-[4/5] overflow-hidden image-zoom"><Image src="/images/technical-planning.png" alt="Planning and technical design" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" /></div>
          </div>
          <div className="space-y-3">{capabilities.map((item, index) => { const Icon = item.icon; return <article key={item.title} className="group grid grid-cols-[auto_1fr_auto] items-start gap-4 border border-ink/10 p-5 transition hover:border-copper hover:bg-mist sm:gap-6 sm:p-7"><span className="grid h-11 w-11 place-items-center bg-copper/10 text-copper"><Icon className="h-5 w-5" strokeWidth={1.5} /></span><div><h2 className="font-display text-xl font-semibold tracking-tight">{item.title}</h2><p className="mt-2 text-sm leading-6 text-ink/55">{item.text}</p></div><span className="font-display text-sm font-semibold text-ink/25">0{index + 1}</span></article>; })}</div>
        </div>
      </section>
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <SectionHeading eyebrow="Connected development" title="From land potential to lasting places." light align="center" />
          <div className="mt-14 grid md:grid-cols-3">{stages.map((stage, index) => <div key={stage.number} className="relative border border-white/12 p-8 md:border-r-0 last:md:border-r"><p className="text-xs font-bold text-copper">{stage.number}</p><h3 className="mt-8 font-display text-2xl font-medium">{stage.title}</h3><p className="mt-3 text-sm leading-6 text-white/55">{stage.description}</p>{index < 2 && <ArrowDown className="absolute -bottom-4 left-1/2 z-10 h-8 w-8 -translate-x-1/2 rounded-full bg-copper p-2 md:-right-4 md:bottom-auto md:left-auto md:top-1/2 md:-translate-y-1/2 md:translate-x-0 md:-rotate-90" />}</div>)}</div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
