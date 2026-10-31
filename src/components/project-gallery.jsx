"use client";

import { useState } from "react";
import ProjectCard from "./project-card";
import Reveal from "./reveal";

const filters = ["All projects", "Next.js", "React + Vite"];

export default function ProjectGallery({ projects }) {
  const [filter, setFilter] = useState("All projects");
  const filtered = filter === "All projects" ? projects : projects.filter((project) => filter === "React + Vite" ? project.stack.includes("Vite") : project.stack.includes(filter));

  return <>
    <div className="mb-10 flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects">
      {filters.map((item) => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)} className={`btn btn-sm h-10 rounded-full px-5 shadow-none ${filter === item ? "border-[#c7ff76] bg-[#c7ff76] text-[#081016]" : "btn-outline border-white/20 bg-[#111a29] text-[#b7c5db] hover:border-[#c7ff76] hover:bg-[#c7ff76] hover:text-[#081016]"}`}>{item}</button>)}
      <span className="w-full font-mono text-[10px] text-[#9caac2] sm:ml-auto sm:w-auto">SHOWING {String(filtered.length).padStart(2, "0")}</span>
    </div>
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3" aria-live="polite">{filtered.map((project) => <Reveal key={project.slug}><ProjectCard project={project} number={projects.indexOf(project) + 1} /></Reveal>)}</div>
  </>;
}
