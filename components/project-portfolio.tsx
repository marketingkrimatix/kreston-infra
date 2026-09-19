"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, MapPin, X } from "lucide-react";
import { useEffect, useState } from "react";
import { projectCategories, projects } from "@/lib/projects";

type ActiveImage = { projectIndex: number; imageIndex: number } | null;

export function ProjectPortfolio() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");
  const [active, setActive] = useState<ActiveImage>(null);
  const visibleProjects = projects.filter((project) => filter === "All" || project.category === filter);

  function open(projectId: string, imageIndex: number) {
    setActive({ projectIndex: projects.findIndex((project) => project.id === projectId), imageIndex });
  }

  function move(direction: number) {
    setActive((current) => {
      if (!current) return null;
      const images = projects[current.projectIndex].images;
      return { ...current, imageIndex: (current.imageIndex + direction + images.length) % images.length };
    });
  }

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setActive(null);
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
    }
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = active ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <>
      <div className="flex flex-wrap gap-2" aria-label="Filter projects">
        {projectCategories.map((category) => (
          <button key={category} onClick={() => setFilter(category)} className={`border px-4 py-2.5 text-[10px] font-bold uppercase tracking-[.16em] transition ${filter === category ? "border-ink bg-ink text-white" : "border-ink/15 text-ink/55 hover:border-copper hover:text-copper"}`}>
            {category}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {visibleProjects.map((project) => (
          <article key={project.id} id={project.id} className="scroll-mt-28 overflow-hidden border border-ink/10 bg-mist">
            <button onClick={() => open(project.id, 0)} className="group relative block aspect-[16/10] w-full overflow-hidden bg-ink text-left image-zoom" aria-label={`Open ${project.title} gallery`}>
              <Image src={project.images[0]} alt={`${project.title} project`} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" loading={project.id === "check-dam" ? "eager" : "lazy"} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center bg-white/95 text-ink transition group-hover:bg-copper group-hover:text-white"><Expand className="h-4 w-4" /></span>
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[.2em] text-copper">{project.category}</p>
                <h2 className="mt-2 font-display text-3xl font-medium tracking-[-.035em]">{project.title}</h2>
              </div>
            </button>
            <div className="p-6 sm:p-8">
              {project.location && <p className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[.14em] text-ink/40"><MapPin className="h-3.5 w-3.5 text-copper" />{project.location}</p>}
              <p className="mt-4 text-sm leading-7 text-ink/58">{project.summary}</p>
              <div className="mt-6 grid grid-cols-5 gap-2">
                {project.images.slice(1).map((image, index) => (
                  <button key={image} onClick={() => open(project.id, index + 1)} className="group relative aspect-square overflow-hidden bg-ink" aria-label={`View ${project.title} image ${index + 2}`}>
                    <Image src={image} alt="" fill sizes="120px" className="object-cover transition duration-500 group-hover:scale-105 group-hover:opacity-75" />
                  </button>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {active && (() => {
        const project = projects[active.projectIndex];
        return <div className="fixed inset-0 z-[100] grid place-items-center bg-[#0c141b]/95 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label={`${project.title} image gallery`} onClick={() => setActive(null)}>
          <button onClick={() => setActive(null)} className="absolute right-4 top-4 z-10 grid h-11 w-11 place-items-center border border-white/20 text-white transition hover:bg-white hover:text-ink sm:right-7 sm:top-7" aria-label="Close gallery"><X className="h-5 w-5" /></button>
          <button onClick={(event) => { event.stopPropagation(); move(-1); }} className="absolute left-3 z-10 grid h-11 w-11 place-items-center bg-white text-ink transition hover:bg-copper hover:text-white sm:left-7" aria-label="Previous image"><ChevronLeft className="h-5 w-5" /></button>
          <div className="relative h-[76vh] w-[88vw] max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <Image src={project.images[active.imageIndex]} alt={`${project.title} — image ${active.imageIndex + 1}`} fill sizes="90vw" className="object-contain" priority />
          </div>
          <button onClick={(event) => { event.stopPropagation(); move(1); }} className="absolute right-3 z-10 grid h-11 w-11 place-items-center bg-white text-ink transition hover:bg-copper hover:text-white sm:right-7" aria-label="Next image"><ChevronRight className="h-5 w-5" /></button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center text-white sm:bottom-7"><p className="text-sm font-bold">{project.title}</p><p className="mt-1 text-[10px] uppercase tracking-[.18em] text-white/50">{active.imageIndex + 1} / {project.images.length}</p></div>
        </div>;
      })()}
    </>
  );
}
