import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Eye, Flag } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Kreston Infra Projects, an integrated real estate development company founded by Shaikh Mohammed Imran in Hyderabad.",
};

const mission = [
  "Develop high-value residential and infrastructure assets across emerging growth locations",
  "Optimize land potential through strategic planning and efficient design",
  "Maintain strong control over quality, timelines, and execution standards",
  "Deliver developments aligned with market demand and long-term usability",
  "Build projects that offer both lifestyle value and investment potential",
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About us" title="Building value. Developing futures." description="An integrated real estate development company creating high-value residential and infrastructure assets across Telangana." image="/images/villas-and-buildings/mehdipatnam-site/IMG-20260919-WA0009.jpg" />
      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-site gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div>
            <SectionHeading eyebrow="Our company" title="Development guided by long-term value." />
            <div className="mt-7 space-y-5 text-[15px] leading-7 text-ink/62">
              <p>Kreston Infra Projects is an integrated real estate development company focused on creating high-value residential and infrastructure assets across Telangana.</p>
              <p>Headquartered in Madhapur, Hyderabad, the company manages the complete development lifecycle, from land identification and planning to execution and delivery.</p>
              <p>With strategic location selection, efficient design, and disciplined execution, Kreston develops premium residential villas and refined interior spaces aligned with modern lifestyle expectations.</p>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden bg-mist image-zoom">
            <Image src="/images/company-residential.png" alt="Residential building shown in Kreston Infra Projects company profile" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            <div className="absolute bottom-0 left-0 bg-copper px-6 py-5 text-white"><p className="font-display text-2xl font-medium">Established 2021</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[.18em] text-white/65">Hyderabad, Telangana</p></div>
          </div>
        </div>
      </section>
      <section className="bg-mist py-20 sm:py-28">
        <div className="mx-auto grid max-w-site gap-10 px-5 sm:px-8 lg:grid-cols-[.65fr_1fr] lg:items-center">
          <SectionHeading eyebrow="Founder" title="Shaikh Mohammed Imran" copy="Kreston is driven by a focus on disciplined execution, strategic development, and long-term asset value creation." />
          <div className="border-l-2 border-copper bg-white p-8 sm:p-10">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-copper">A development-led approach</p>
            <p className="mt-5 text-lg leading-8 text-ink/70">From choosing the right land to shaping spaces people can live and work in, Kreston brings planning, design, execution, and delivery into one connected process.</p>
          </div>
        </div>
      </section>
      <section className="bg-ink py-20 text-white sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-site gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
          <div>
            <div className="flex h-12 w-12 items-center justify-center bg-copper"><Flag className="h-5 w-5" /></div>
            <h2 className="mt-7 font-display text-4xl font-medium tracking-[-.04em]">Our mission</h2>
            <div className="mt-7 space-y-4">{mission.map((item) => <p key={item} className="flex gap-3 text-sm leading-6 text-white/65"><CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-copper" />{item}</p>)}</div>
          </div>
          <div className="border-t border-white/15 pt-12 lg:border-l lg:border-t-0 lg:pl-20 lg:pt-0">
            <div className="flex h-12 w-12 items-center justify-center bg-copper"><Eye className="h-5 w-5" /></div>
            <h2 className="mt-7 font-display text-4xl font-medium tracking-[-.04em]">Our vision</h2>
            <p className="mt-7 text-lg leading-8 text-white/65">To be a leading real estate developer delivering strategically planned residential and infrastructure developments that create long-term value and modern living standards.</p>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
