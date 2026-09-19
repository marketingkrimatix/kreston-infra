import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { CtaBand } from "@/components/cta-band";
import { ProjectPortfolio } from "@/components/project-portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Kreston Infra Projects across infrastructure, office interiors, structural fabrication, residential buildings, and villas.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Real work. Documented from the ground up."
        description="Explore Kreston’s work across civil infrastructure, workplace interiors, structural fabrication, residential buildings, and villas."
        image="/images/check-dam/IMG-20260919-WA0023.jpg"
      />
      <section className="bg-white py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-site px-5 sm:px-8">
          <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_.65fr] lg:items-end">
            <SectionHeading
              eyebrow="Selected portfolio"
              title="Execution, clearly visible."
              copy="Each collection is drawn from Kreston’s own site documentation, showing both the construction process and finished outcomes."
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
