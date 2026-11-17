"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import ProjectCard from "./project-card";
import Reveal from "./reveal";

const filters = ["All projects", "Full-stack", "Frontend"];

export default function ProjectGallery({ projects }) {
  const [filter, setFilter] = useState("All projects");
  const id = useId();
  const reducedMotion = useReducedMotion();
  const filtered = projects.filter((project) => filter === "All projects" || project.discipline === filter);

  return (
    <div>
      <div className="mb-9 flex flex-wrap items-center justify-between gap-5">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects">
          {filters.map((item) => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)} className={`relative isolate rounded-full border px-5 py-3 text-xs font-semibold transition-colors ${filter === item ? "border-[#c7ff76] text-[#090e18]" : "border-white/15 text-[#a8b7cd] hover:border-white/40 hover:text-white"}`}>
            {filter === item && <motion.span layoutId={`${id}-filter`} className="absolute inset-0 -z-10 rounded-full bg-[#c7ff76]" />}{item}
          </button>)}
        </div>
        <p className="font-mono text-[10px] tracking-wider text-[#9caac2]" aria-live="polite">{String(filtered.length).padStart(2, "0")} PROJECTS / {filter.toUpperCase()}</p>
      </div>
      <motion.div layout className="grid items-stretch gap-6 md:grid-cols-2">
        <AnimatePresence initial={false} mode="popLayout">
          {filtered.map((project) => (
            <motion.div key={project.slug} layout initial={{ opacity: 0, y: reducedMotion ? 0 : 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: reducedMotion ? 1 : 0.98 }} whileHover={{ y: reducedMotion ? 0 : -5 }} transition={{ duration: reducedMotion ? 0 : 0.25 }}>
              <Reveal delay={projects.indexOf(project) * 80} className="h-full"><ProjectCard project={project} number={projects.indexOf(project) + 1} /></Reveal>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
