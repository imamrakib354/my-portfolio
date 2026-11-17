"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { projectTheme } from "@/lib/project-theme";
import { ArrowIcon } from "./icons";

export default function ProjectFlow({ project }) {
  const [active, setActive] = useState(0);
  const reducedMotion = useReducedMotion();

  return (
    <div style={projectTheme(project.accent)}>
      <div className="project-stage overflow-hidden rounded-2xl border border-white/10 p-6 sm:p-9">
        <p className="font-mono text-[10px] tracking-widest text-[var(--project-accent)]">SYSTEM AT A GLANCE</p>
        <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{project.architecture.title}</h3>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-[#bdc8d8]">{project.architecture.description}</p>
        <ol className="mt-9 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {project.architecture.nodes.map((node) => (
            <li key={node.label} className="rounded-xl border border-white/15 bg-[#090e18]/65 p-5">
              <span className="font-mono text-[10px] text-[var(--project-accent)]">{node.label}</span>
              <h4 className="mt-6 text-lg font-semibold">{node.title}</h4>
              <p className="mt-3 text-sm leading-6 text-[#a8b7cd]">{node.detail}</p>
            </li>
          ))}
        </ol>
        <p className="mt-6 border-t border-white/15 pt-5 text-sm leading-7 text-[#c2cddc]"><span className="mr-2 text-[var(--project-accent)]" aria-hidden="true">↳</span>{project.architecture.note}</p>
      </div>
      {project.workflow?.length > 0 && <div className="mt-8 rounded-2xl border border-white/10 p-5 sm:p-8">
        <p className="mb-6 font-mono text-[10px] tracking-widest text-[#9caac2]">FOLLOW THE USER JOURNEY / SELECT A STEP</p>
        <ol className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {project.workflow.map((step, index) => (
            <li key={step.title}>
              <button type="button" aria-pressed={active === index} aria-controls={`${project.slug}-workflow`} onClick={() => setActive(index)} className={`flex w-full items-center gap-3 rounded-lg border p-4 text-left text-sm transition-colors ${active === index ? "border-[var(--project-accent)]/70 bg-white/5 text-[var(--project-accent)]" : "border-white/10 text-[#a8b7cd] hover:border-white/30"}`}>
                <span className="font-mono text-[10px]">{String(index + 1).padStart(2, "0")}</span><span>{step.title}</span><ArrowIcon width={14} height={14} className="ml-auto hidden shrink-0 sm:block" />
              </button>
            </li>
          ))}
        </ol>
        <div id={`${project.slug}-workflow`} className="mt-5 min-h-20 rounded-xl bg-white/3 p-5" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.12 }} className="text-sm leading-7 text-[#bdc8d8]">{project.workflow[active].detail}</motion.p>
          </AnimatePresence>
        </div>
      </div>}
    </div>
  );
}
