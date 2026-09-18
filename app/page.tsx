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
        <Image src="/images/hero-construction.png" alt="Construction structure rising over the Hyderabad skyline" fill sizes="100vw" className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d1721]/95 via-[#0d1721]/65 to-[#0d1721]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1721]/60 via-transparent to-transparent" />
        <div className="blueprint-grid absolute inset-y-0 left-0 w-1/2 opacity-[0.06]" />
        <div className="relative mx-auto flex min-h-[calc(100svh-78px)] max-w-site items-center px-5 py-20 sm:px-8">
          <div className="max-w-4xl reveal-up">
            <p className="eyebrow text-copper"><span />Civil & infrastructure construction</p>
            <h1 className="mt-6 font-display text-[3.3rem] font-medium leading-[.94] tracking-[-0.055em] sm:text-7xl lg:text-[6.2rem]">
              Engineered with<br /><span className="text-white/60">purpose.</span> Built to last.
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/68 sm:text-lg">Structured planning, technical expertise, and disciplined execution—across residential and infrastructure projects in Telangana.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/services" className="button-light">Explore our services <ArrowRight className="h-4 w-4" /></Link>
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
              <p className="mt-1 text-[10px] font-bold uppercase tracking-[.2em] text-white/50">Construction solutions</p>
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="Who we are" title="A disciplined approach to every build." />
            <div className="mt-7 space-y-5 text-[15px] leading-7 text-ink/65">
              <p>Kreston Infra Projects is a professionally managed civil and infrastructure construction company delivering comprehensive solutions across residential and infrastructure sectors.</p>
              <p>Headquartered in Madhapur, Hyderabad, the company operates across Telangana and executes projects of all scales with a structured, quality-driven approach.</p>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Carefully sourced materials", "Disciplined supervision", "Strong internal coordination", "Durable, value-driven outcomes"].map((item) => <p key={item} className="flex items-center gap-3 text-sm font-semibold"><span className="grid h-6 w-6 place-items-center bg-copper/10 text-copper"><Check className="h-3.5 w-3.5" /></span>{item}</p>)}
            </div>
            <Link href="/about" className="mt-9 inline-flex items-center gap-3 text-sm font-bold text-ink transition hover:text-copper">Discover Kreston <MoveRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow="What we do" title="Construction expertise, end to end." copy="Comprehensive civil and infrastructure services delivered through structured planning, technical expertise, and disciplined execution." />
            <Link href="/services" className="inline-flex items-center gap-3 text-sm font-bold text-ink transition hover:text-copper">View all services <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-12 grid border-l border-t border-ink/10 md:grid-cols-2 lg:grid-cols-3">
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
          <SectionHeading eyebrow="Selected disciplines" title="Built across sectors. United by precision." copy="A visual look at the sectors and disciplines in which Kreston is equipped to deliver." light />
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.25fr_.75fr]">
            <Link href="/projects" className="group relative min-h-[520px] overflow-hidden image-zoom">
              <Image src="/images/infrastructure.png" alt="Infrastructure development capability" fill sizes="(max-width: 1024px) 100vw, 65vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-7 sm:p-9"><div><p className="text-[10px] font-bold uppercase tracking-[.22em] text-copper">Infrastructure</p><h3 className="mt-2 font-display text-3xl font-medium sm:text-4xl">Development projects</h3></div><ArrowRight className="h-6 w-6 transition group-hover:translate-x-1" /></div>
            </Link>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
              <Link href="/projects" className="group relative min-h-[250px] overflow-hidden image-zoom"><Image src="/images/residential-villa.png" alt="Residential and villa construction capability" fill sizes="(max-width: 1024px) 50vw, 35vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-copper">Residential</p><h3 className="mt-1 font-display text-2xl font-medium">Apartments & villas</h3></div></Link>
              <Link href="/projects" className="group relative min-h-[250px] overflow-hidden image-zoom"><Image src="/images/site-engineering.png" alt="Site engineering and inspection capability" fill sizes="(max-width: 1024px) 50vw, 35vw" className="object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-black/75 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-copper">Execution</p><h3 className="mt-1 font-display text-2xl font-medium">Engineering oversight</h3></div></Link>
            </div>
          </div>
          <p className="mt-5 text-xs leading-5 text-white/38">Visuals represent Kreston’s stated service capabilities; individual project records can be added as the portfolio expands.</p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <div className="mx-auto grid max-w-site gap-14 px-5 sm:px-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start"><SectionHeading eyebrow="Why Kreston" title="Control where it matters most." copy="Quality is built through process. Kreston connects the details—from drawings and inspections to people and progress." /><Link href="/capabilities" className="mt-8 inline-flex items-center gap-3 text-sm font-bold transition hover:text-copper">Explore our capabilities <ArrowRight className="h-4 w-4" /></Link></div>
          <div className="grid gap-px bg-ink/10 sm:grid-cols-2">
            {capabilities.slice(0,6).map((item, index) => { const Icon = item.icon; return <div key={item.title} className="bg-mist p-7 sm:p-8"><div className="flex items-center justify-between"><Icon className="h-7 w-7 text-copper" strokeWidth={1.5} /><span className="text-xs font-bold text-ink/25">0{index+1}</span></div><h3 className="mt-8 font-display text-xl font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-ink/55">{item.text}</p></div>})}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
