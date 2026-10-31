"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, GithubIcon } from "./icons";
import { primaryButton, outlineButton } from "@/lib/styles";
import { handleTabKeyDown } from "@/lib/tab-navigation";

export default function FeaturedWork({ projects }) {
  const [active, setActive] = useState(0);
  const project = projects[active];

  return <div className="grid gap-4 lg:grid-cols-[.32fr_1fr]">
    <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible" role="tablist" aria-label="Select a featured project">
      {projects.map((item, index) => <button key={item.slug} id={`featured-tab-${index}`} type="button" role="tab" tabIndex={active === index ? 0 : -1} aria-selected={active === index} aria-controls="featured-panel" onClick={() => setActive(index)} onKeyDown={(event) => handleTabKeyDown(event, active, projects.length, setActive, "featured-tab")} className={`group min-w-50 rounded-xl border p-4 text-left transition-all duration-300 sm:min-w-60 lg:min-w-0 lg:p-5 ${active === index ? "border-[#c7ff76] bg-[#c7ff76]/10 shadow-[0_0_35px_#c7ff7612]" : "border-white/10 bg-[#111a29] hover:border-white/30"}`}><span className="font-mono text-[10px] tracking-widest text-[#c7ff76]">0{index + 1} / {item.category.toUpperCase()}</span><strong className="mt-3 block text-lg font-semibold text-white lg:text-xl">{item.name}</strong><span className="mt-2 block text-xs leading-5 text-[#9caac2]">{item.summary}</span><span className={`mt-4 inline-flex items-center gap-2 text-xs font-semibold ${active === index ? "text-[#c7ff76]" : "text-[#8294ad]"}`}>EXPLORE <ArrowIcon diagonal width={14} height={14} /></span></button>)}
    </div>
    <div id="featured-panel" role="tabpanel" aria-labelledby={`featured-tab-${active}`} className="overflow-hidden rounded-2xl border border-white/10 bg-[#111a29]">
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3"><span className="size-2.5 rounded-full bg-[#ff6d74]" /><span className="size-2.5 rounded-full bg-[#f9c65b]" /><span className="size-2.5 rounded-full bg-[#c7ff76]" /><span className="ml-auto font-mono text-[10px] text-[#8798ae]">{project.slug}.project</span></div>
      <div className="relative h-65 overflow-hidden bg-[#192536] sm:h-95 lg:h-100"><Image key={project.slug} src={project.image} alt={project.imageAlt} fill sizes="(max-width: 1024px) 100vw, 75vw" className="object-cover object-top" /><div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#111a29] to-transparent" /></div>
      <div className="flex flex-col justify-between gap-6 p-5 sm:flex-row sm:items-end sm:p-7"><div className="max-w-lg"><span className="font-mono text-[10px] tracking-widest text-[#c7ff76]">{project.type.toUpperCase()} / {project.year}</span><h3 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{project.name}</h3><p className="mt-2 text-sm leading-6 text-[#9caac2]">{project.summary}</p><div className="mt-4 flex flex-wrap gap-2">{project.stack.slice(0, 4).map((item) => <span key={item} className="badge badge-outline rounded-full border-white/20 px-3 py-3 font-mono text-[10px] text-[#b7c5db]">{item}</span>)}</div></div><div className="flex shrink-0 flex-wrap gap-2"><Link href={`/projects/${project.slug}`} className={primaryButton}>Case study <ArrowIcon diagonal width={16} height={16} /></Link><a href={project.github} target="_blank" rel="noopener noreferrer" className={`${outlineButton} !px-4`} aria-label={`${project.name} source code`}><GithubIcon width={18} height={18} /></a></div></div>
    </div>
  </div>;
}
