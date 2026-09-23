import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { ProjectPortfolio } from "@/components/project-portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Kreston's named residential projects, development sites, and documented infrastructure, interior, and building work.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Development with a sense of place."
        description="Explore the residential projects and development sites in Kreston’s company profile, alongside documented work across infrastructure, interiors, and buildings."
        image="/images/villas-and-buildings/mehdipatnam-site/IMG-20260919-WA0009.jpg"
      />
      <section className="bg-mist py-20 sm:py-28">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <SectionHeading eyebrow="Key residential projects" title="Addressed by location. Designed for living." copy="The updated company profile identifies these five independent residential projects and presents their design visuals." />
          <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_.8fr] lg:items-center">
            <div className="relative aspect-[16/10] overflow-hidden bg-white p-3"><Image src="/images/residential-project-concepts.png" alt="Five residential project design visuals from the Kreston company profile" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-contain" /></div>
            <div className="grid gap-3 sm:grid-cols-2">
              {["Manikonda", "Kohesar Colony", "Samata Colony", "Gulshan Colony", "Mehdipatnam"].map((name, index) => <div key={name} className="border border-ink/10 bg-white p-5"><p className="text-xs font-bold text-copper">0{index + 1}</p><h3 className="mt-3 font-display text-xl font-semibold">{name}</h3><p className="mt-1 text-xs text-ink/45">Residential project</p></div>)}
            </div>
          </div>
          <p className="mt-4 text-xs leading-5 text-ink/45">Architectural design visuals are reproduced from the company profile; they are not presented as completed-project photographs.</p>
        </div>
      </section>
      <section className="bg-ink py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-site gap-10 px-5 sm:px-8 lg:grid-cols-[.75fr_1.25fr] lg:items-center">
          <div><SectionHeading eyebrow="Development sites" title="Growing beyond the city." copy="Kreston’s updated profile lists development sites at Kothur, Nandigam, and Tandur." light /><div className="mt-7 flex flex-wrap gap-2">{["Kothur", "Nandigam", "Tandur"].map((name) => <span key={name} className="border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-white/75">{name}</span>)}</div><p className="mt-6 text-xs leading-5 text-white/45">The photograph is included in the profile’s development-site section and is not assigned to a specific location.</p></div>
          <div className="relative aspect-[16/9] overflow-hidden"><Image src="/images/development-sites.png" alt="Aerial photograph from Kreston's development-site profile section" fill sizes="(max-width: 1024px) 100vw, 60vw" className="object-cover" /></div>
        </div>
      </section>
      <section className="bg-mist py-20 sm:py-28">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <SectionHeading eyebrow="Interior design" title="Spaces with a distinct point of view." copy="The updated profile also presents interior design visuals that reflect Kreston's focus on refined, modern spaces." />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((number) => <div key={number} className="relative aspect-[4/3] overflow-hidden bg-white image-zoom"><Image src={`/images/profile-interiors/interior-0${number}.png`} alt={`Interior design visual ${number} from the Kreston company profile`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover" /></div>)}
          </div>
          <p className="mt-4 text-xs leading-5 text-ink/45">Design visuals from the company profile; not presented as photographs of completed interiors.</p>
        </div>
      </section>
      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_.65fr] lg:items-end">
            <SectionHeading
              eyebrow="Documented work"
              title="Execution, clearly visible."
              copy="Browse site photographs spanning civil infrastructure, interior works, fabrication, apartments, and villas."
            />
            <p className="border-l-2 border-copper pl-5 text-sm leading-7 text-ink/55">
              Select a discipline to filter the portfolio. Open any image for a larger view and navigate through the complete curated project set.
            </p>
          </div>
          <ProjectPortfolio />
        </div>
      </section>
      <CtaBand />
    </>
  );
}
