import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { services } from "@/lib/data";

export const metadata: Metadata = { title: "What We Develop", description: "Explore Kreston's residential, land, infrastructure, and premium interior development areas." };

export default function ServicesPage() {
  return <><PageHero eyebrow="What we develop" title="Places planned for what comes next." description="Integrated real estate and infrastructure developments shaped by strategic planning, technical expertise, and disciplined execution." image="/images/villas-and-buildings/mehdipatnam-site/IMG-20260919-WA0009.jpg" />
    <section className="bg-white py-20 sm:py-28 lg:py-32"><div className="mx-auto max-w-site px-5 sm:px-8"><SectionHeading eyebrow="Development areas" title="Four ways we create lasting value." copy="From selecting and optimizing land to shaping residential spaces, infrastructure, and interiors, Kreston manages the full development lifecycle." />
      <div className="mt-14 space-y-5">{services.map((service, i) => { const Icon=service.icon; return <article id={`service-${service.number}`} key={service.number} className="group grid overflow-hidden border border-ink/10 bg-mist lg:grid-cols-[.85fr_1.15fr]"><div className={`relative min-h-[300px] overflow-hidden image-zoom ${i % 2 ? "lg:order-2" : ""}`}><Image src={service.image} alt={`${service.shortTitle} visual`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div><div className="flex min-h-[300px] flex-col justify-center p-7 sm:p-10 lg:p-12"><div className="flex items-center justify-between"><Icon className="h-9 w-9 text-copper" strokeWidth={1.5}/><span className="number-outline font-display text-6xl font-semibold">{service.number}</span></div><h2 className="mt-8 max-w-2xl font-display text-3xl font-semibold tracking-[-.035em] sm:text-4xl">{service.title}</h2><p className="mt-5 max-w-2xl text-[15px] leading-7 text-ink/58">{service.description}</p><Link href="/contact" className="mt-7 inline-flex w-fit items-center gap-3 text-sm font-bold transition hover:text-copper">Discuss this development <ArrowRight className="h-4 w-4" /></Link></div></article>})}</div>
    </div></section><CtaBand /></>;
}
