import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Check, MoveRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { capabilities, services } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <section className="relative isolate min-h-[calc(100svh-78px)] overflow-hidden bg-ink text-white">
        <Image src="/images/villas-and-buildings/mehdipatnam-site/IMG-20260919-WA0009.jpg" alt="Residential building development in Mehdipatnam" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1721]/95 via-[#0d1721]/65 to-[#0d1721]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1721]/60 via-transparent to-transparent" />
        <div className="blueprint-grid absolute inset-y-0 left-0 w-1/2 opacity-[0.06]" />
        <div className="relative mx-auto flex min-h-[calc(100svh-78px)] max-w-site items-center px-5 py-20 sm:px-8">
          <div className="max-w-4xl reveal-up">
            <p className="eyebrow text-copper"><span />Real estate & infrastructure development</p>
            <h1 className="mt-6 font-display text-[3.3rem] font-medium leading-[.94] tracking-[-0.055em] sm:text-7xl lg:text-[6.2rem]">
              Building value.<br /><span className="text-white/60">Developing futures.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/68 sm:text-lg">Integrated residential and infrastructure developments shaped by strategic planning, efficient design, and disciplined execution across Telangana.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/services" className="button-light">What we develop <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/contact" className="button-outline-light">Discuss your project</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden border-l border-t border-white/15 bg-[#0d1721]/70 backdrop-blur-lg lg:grid lg:grid-cols-3">
          {[['2021','Established'],['Hyderabad','Headquartered'],['Telangana','Operating region']].map(([value,label]) => <div key={label} className="min-w-44 border-r border-white/15 px-7 py-6"><p className="font-display text-xl font-medium">{value}</p><p className="mt-1 text-[10px] font-bold uppercase tracking-[.2em] text-white/45">{label}</p></div>)}
        </div>
        <a href="#overview" className="absolute bottom-6 left-6 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[.2em] text-white/55 sm:flex lg:left-8">Scroll to discover <ArrowDownRight className="h-4 w-4 text-copper" /></a>
      </section>

      <section id="overview" className="overflow-hidden bg-white py-20 sm:py-28 lg:py-36">
        <div className="mx-auto grid max-w-site gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_.95fr] lg:items-center lg:gap-24">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-mist image-zoom">
              <Image src="/images/company-residential.png" alt="Residential construction featured in the Kreston company profile" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-7 -right-3 bg-ink px-7 py-6 text-white sm:-right-7 sm:px-9 sm:py-8">
              <p className="font-display text-3xl font-medium tracking-tight">End-to-end</p>
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[.2em] text-white/50">Development lifecycle</p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Who we are" title="A considered approach to every development." />
            <div className="mt-7 space-y-5 text-[15px] leading-7 text-ink/65">
              <p>Kreston Infra Projects is an integrated real estate development company focused on creating high-value residential and infrastructure assets across Telangana.</p>
              <p>Headquartered in Madhapur, Hyderabad, Kreston manages the complete development lifecycle—from land identification and planning to execution and delivery.</p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Strategic location selection", "Efficient design", "Disciplined execution", "Long-term asset value"].map((item) => <p key={item} className="flex items-center gap-3 text-sm font-semibold"><span className="grid h-6 w-6 place-items-center bg-copper/10 text-copper"><Check className="h-3.5 w-3.5" /></span>{item}</p>)}
            </div>
            <Link href="/about" className="mt-9 inline-flex items-center gap-3 text-sm font-bold text-ink transition hover:text-copper">Discover Kreston <MoveRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="What we develop" title="Places designed for enduring value." copy="Residential, land, infrastructure, and interior developments connected by strategic planning and disciplined delivery." />
            <Link href="/services" className="inline-flex items-center gap-3 text-sm font-bold text-ink transition hover:text-copper">Explore development areas <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 grid border-l border-t border-ink/10 md:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon;
              return <article key={service.number} className="group relative min-h-[310px] overflow-hidden border-b border-r border-ink/10 bg-white p-7 transition hover:bg-ink sm:p-9">
                <p className="number-outline absolute right-6 top-3 font-display text-7xl font-semibold opacity-60">{service.number}</p>
                <Icon className="h-9 w-9 text-copper" strokeWidth={1.5} />
                <h3 className="mt-16 max-w-xs font-display text-2xl font-semibold leading-tight tracking-[-.025em] text-ink transition group-hover:text-white">{service.shortTitle}</h3>
                <p className="mt-4 text-sm leading-6 text-ink/55 transition group-hover:text-white/55">{service.description}</p>
              </article>;
            })}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white sm:py-28 lg:py-32">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <SectionHeading eyebrow="Selected projects" title="Development made tangible." copy="A closer look at Kreston’s residential, infrastructure, and interior work—from active sites to finished spaces." light />
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
            <Link href="/projects#check-dam" className="group relative min-h-[520px] overflow-hidden image-zoom">
              <Image src="/images/check-dam/IMG-20260919-WA0023.jpg" alt="Check dam civil infrastructure project" fill sizes="(max-width: 1024px) 100vw, 65vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7 sm:p-9"><div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-copper">Infrastructure</p><h3 className="mt-2 font-display text-3xl font-medium sm:text-4xl">Check Dam</h3></div><ArrowRight className="h-6 w-6 transition group-hover:translate-x-1" /></div>
            </Link>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <Link href="/projects#jubilee-hills-kings-office" className="group relative min-h-[250px] overflow-hidden image-zoom"><Image src="/images/jubliee-hills-kings-office/IMG-20260919-WA0154.jpg" alt="Jubilee Hills King’s Office interior" fill sizes="(max-width: 1024px) 50vw, 35vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-copper">Interiors</p><h3 className="mt-1 font-display text-2xl font-medium">King’s Office</h3></div></Link>
              <Link href="/projects#tandur-site" className="group relative min-h-[250px] overflow-hidden image-zoom"><Image src="/images/villas-and-buildings/tandur-site/IMG-20260919-WA0044.jpg" alt="Tandur villa exterior" fill sizes="(max-width: 1024px) 50vw, 35vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-copper">Residential</p><h3 className="mt-1 font-display text-2xl font-medium">Tandur Villa</h3></div></Link>
            </div>
          </div>
          <Link href="/projects" className="mt-7 inline-flex items-center gap-3 text-sm font-bold text-white transition hover:text-copper">Explore the complete portfolio <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-site gap-14 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start"><SectionHeading eyebrow="Why Kreston" title="Value begins with the right decisions." copy="From location and land potential to design, governance, and execution, Kreston keeps long-term usability in view." /><Link href="/capabilities" className="mt-8 inline-flex items-center gap-3 text-sm font-bold transition hover:text-copper">Explore our strengths <ArrowRight className="h-4 w-4" /></Link></div>
          <div className="grid gap-px bg-ink/10 sm:grid-cols-2">
            {capabilities.slice(0,6).map((item, index) => { const Icon = item.icon; return <div key={item.title} className="bg-mist p-7 sm:p-8"><div className="flex items-center justify-between"><Icon className="h-7 w-7 text-copper" strokeWidth={1.5} /><span className="text-xs font-bold text-ink/25">0{index+1}</span></div><h3 className="mt-8 font-display text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-ink/55">{item.text}</p></div>})}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
