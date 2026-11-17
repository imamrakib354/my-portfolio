"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./icons";
import { primaryButton, outlineButton } from "@/lib/styles";
import { handleTabKeyDown } from "@/lib/tab-navigation";
import { projectTheme } from "@/lib/project-theme";
import Reveal from "./reveal";

export default function FeaturedWork({ projects }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const reducedMotion = useReducedMotion();
  const project = projects[active];
  const detailItem = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 9 },
    visible: { opacity: 1, y: 0, transition: { duration: reducedMotion ? 0 : 0.3 } },
  };

  return (
    <div className="grid gap-5 lg:grid-cols-[.34fr_1fr]">
      <Reveal className="min-w-0">
        <div className="flex gap-3 overflow-x-auto p-1 pb-3 lg:flex-col lg:overflow-visible" role="tablist" aria-label="Select a featured project">
        {projects.map((item, index) => (
          <motion.button key={item.slug} id={`${id}-${index}`} type="button" role="tab" tabIndex={active === index ? 0 : -1} aria-selected={active === index} aria-controls={`${id}-panel`} onClick={() => setActive(index)} onKeyDown={(event) => handleTabKeyDown(event, active, projects.length, setActive, id)} whileHover={{ y: reducedMotion ? 0 : -3 }} whileTap={{ scale: reducedMotion ? 1 : 0.985 }} className={`group relative min-w-56 overflow-hidden rounded-xl border p-5 text-left transition-colors lg:min-w-0 lg:p-6 ${active === index ? "border-[#c7ff76]/50 bg-[#c7ff76]/5" : "border-white/10 hover:border-white/30"}`}>
            {active === index && <motion.span layoutId={`${id}-indicator`} className="absolute inset-y-5 left-0 w-0.5 rounded-full bg-[#c7ff76]" />}
            <span className="font-mono text-[10px] tracking-widest text-[#8f9fb7]">0{index + 1} / {item.discipline.toUpperCase()}</span>
            <strong className={`mt-4 block text-xl font-semibold ${active === index ? "text-[#c7ff76]" : "text-white"}`}>{item.name}</strong>
            <span className="mt-2 block text-sm leading-6 text-[#a8b7cd]">{item.summary}</span>
            <span className="mt-5 inline-flex items-center gap-2 font-mono text-[10px] text-[#a8b7cd]">{active === index ? "NOW EXPLORING" : "SELECT PROJECT"} <ArrowIcon width={14} height={14} /></span>
          </motion.button>
        ))}
        </div>
      </Reveal>
      <Reveal delay={120} className="min-w-0">
        <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-${active}`} style={projectTheme(project.accent)} className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#111a29]">
        <div className="project-stage px-4 pt-4 sm:px-7 sm:pt-6">
          <div className="mb-4 flex items-center gap-2"><span className="size-2 rounded-full bg-white/35" /><span className="size-2 rounded-full bg-white/20" /><span className="size-2 rounded-full bg-white/10" /><span className="ml-auto font-mono text-[10px] text-[var(--project-accent)]">{project.slug} / preview</span></div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-t-lg border border-b-0 border-white/15 shadow-[0_10px_40px_#0005]">
            <AnimatePresence initial={false}>
              <motion.div key={project.slug} initial={{ opacity: 0, scale: reducedMotion ? 1 : 1.035, y: reducedMotion ? 0 : 12 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }} className="absolute inset-0">
                <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 1024px) 90vw, 850px" className="object-cover object-top" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <div className="p-6 sm:p-8">
          <AnimatePresence initial={false} mode="wait">
            <motion.div key={project.slug} initial="hidden" animate="visible" exit={{ opacity: 0, transition: { duration: reducedMotion ? 0 : 0.12 } }} variants={{ hidden: {}, visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.07 } } }}>
              <motion.div variants={detailItem} className="flex flex-wrap items-start justify-between gap-5">
                <div><span className="font-mono text-[10px] tracking-widest text-[#8191ac]">{project.category.toUpperCase()} / {project.year}</span><h3 className="mt-2 text-3xl font-semibold tracking-tight">{project.name}</h3></div>
                <span className="rounded-full border border-white/15 px-3 py-2 font-mono text-[10px] text-[#c7ff76]">{active === 0 ? "LATEST BUILD" : project.discipline.toUpperCase()}</span>
              </motion.div>
              <motion.p variants={detailItem} className="mt-4 max-w-2xl text-sm leading-7 text-[#a8b7cd]">{project.evidence || project.summary}</motion.p>
              <motion.div variants={detailItem} className="mt-5 flex flex-wrap gap-2">{project.stack.slice(0, 4).map((item) => <span key={item} className="rounded-full border border-white/15 px-3 py-1.5 font-mono text-[10px] text-[#b7c5db]">{item}</span>)}</motion.div>
              <motion.div variants={detailItem} className="mt-7 flex flex-wrap gap-3"><Link href={`/projects/${project.slug}`} className={primaryButton}>Explore case study <ArrowIcon diagonal width={16} height={16} /></Link><a href={project.demo} target="_blank" rel="noopener noreferrer" className={outlineButton}>Live site <ArrowIcon diagonal width={16} height={16} /></a></motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
        </div>
      </Reveal>
    </div>
  );
}
