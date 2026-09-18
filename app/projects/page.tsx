import type { Metadata } from "next";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = { title: "Projects", description: "Explore Kreston Infra Projects' residential, infrastructure, civil, and engineering capabilities." };

const projects = [
  { category: "Residential", title: "Residential Construction", image: "/images/company-residential.png", text: "Independent residential apartments delivered with efficient design and quality-focused execution.", source: "Profile imagery" },
  { category: "Infrastructure", title: "Infrastructure Development", image: "/images/infrastructure.png", text: "Essential infrastructure planned for durability, safety, and long-term performance.", source: "Capability visual" },
  { category: "Civil works", title: "Structural & Civil Execution", image: "/images/civil-structure.png", text: "Structural and civil works managed through engineering precision and strict quality control.", source: "Profile imagery" },
  { category: "Residential", title: "Duplex Villas", image: "/images/residential-villa.png", text: "Residential construction with coordinated finishes and considered, efficient design.", source: "Capability visual" },
  { category: "Supervision", title: "Site Engineering", image: "/images/site-engineering.png", text: "Regular site inspection and coordination to monitor quality, safety, and progress.", source: "Profile imagery" },
  { category: "Planning", title: "Design Verification", image: "/images/technical-planning.png", text: "Accurate interpretation and verification of drawings and technical specifications.", source: "Profile imagery" },
];

export default function ProjectsPage() { return <><PageHero eyebrow="Projects" title="A portfolio designed to grow." description="A visual showcase of Kreston’s construction disciplines, prepared for named project case studies as the portfolio is documented." image="/images/infrastructure.png" />
  <section className="bg-white py-20 sm:py-28 lg:py-32"><div className="mx-auto max-w-site px-5 sm:px-8"><div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between"><SectionHeading eyebrow="Project showcase" title="Work defined by discipline." copy="The company profile does not provide named project records. The categories below accurately reflect Kreston’s stated services without inventing clients, locations, or completion details." /><div className="flex flex-wrap gap-2">{["All","Civil","Infrastructure","Residential","Planning"].map((item,i)=><span key={item} className={`border px-4 py-2 text-xs font-bold uppercase tracking-[.14em] ${i===0?"border-ink bg-ink text-white":"border-ink/15 text-ink/55"}`}>{item}</span>)}</div></div>
  <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-12">{projects.map((project,i)=><article key={project.title} className={`group overflow-hidden bg-mist ${i===0||i===3?"lg:col-span-7":"lg:col-span-5"}`}><div className="relative aspect-[4/3] overflow-hidden image-zoom"><Image src={project.image} alt={project.title} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /><div className="absolute right-0 top-0 grid h-12 w-12 place-items-center bg-white text-ink transition group-hover:bg-copper group-hover:text-white"><ArrowUpRight className="h-5 w-5" /></div><span className="absolute bottom-4 left-4 bg-ink/90 px-3 py-2 text-[9px] font-bold uppercase tracking-[.18em] text-white/65 backdrop-blur">{project.source}</span></div><div className="p-6 sm:p-8"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-copper">{project.category}</p><h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">{project.title}</h2><p className="mt-3 text-sm leading-6 text-ink/55">{project.text}</p></div></article>)}</div>
  </div></section><CtaBand /></> }
