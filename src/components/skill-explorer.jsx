"use client";

import { useId, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { handleTabKeyDown } from "@/lib/tab-navigation";
import { skillGroups } from "@/data/skills";
import { ArrowIcon } from "./icons";

export default function SkillExplorer() {
  const [active, setActive] = useState(0);
  const id = useId();
  const reducedMotion = useReducedMotion();
  const group = skillGroups[active];

  return (
    <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#101827] md:grid-cols-[.35fr_1fr]">
      <div className="border-b border-white/10 p-4 md:border-r md:border-b-0" role="tablist" aria-label="Skill categories">
        {skillGroups.map((item, index) => <button key={item.title} id={`${id}-${index}`} type="button" role="tab" tabIndex={active === index ? 0 : -1} aria-selected={active === index} aria-controls={`${id}-panel`} onClick={() => setActive(index)} onKeyDown={(event) => handleTabKeyDown(event, active, skillGroups.length, setActive, id)} className={`relative isolate mb-1 flex w-full items-center justify-between gap-3 rounded-lg px-4 py-4 text-left text-sm font-medium transition-colors sm:text-base ${active === index ? "text-[#c7ff76]" : "text-[#a9b5ca] hover:text-white"}`}>
          {active === index && <motion.span layoutId={`${id}-active`} className="absolute inset-0 -z-10 rounded-lg border border-[#c7ff76]/25 bg-[#c7ff76]/5" />}
          <span><span className="mr-3 font-mono text-[10px] text-[#8191ac]">0{index + 1}</span>{item.title}</span><ArrowIcon diagonal width={15} height={15} className="shrink-0" />
        </button>)}
      </div>
      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-${active}`} className="min-h-[510px] p-6 sm:p-9 lg:min-h-[440px]" aria-live="polite">
        <AnimatePresence initial={false} mode="wait">
          <motion.div key={group.title} initial={{ opacity: 0, y: reducedMotion ? 0 : 7 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.16 }}>
            <span className="font-mono text-[10px] tracking-widest text-[#c7ff76]">{group.label}</span>
            <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{group.title}</h3>
            <p className="mt-3 max-w-xl text-sm leading-7 text-[#a8b7cd]">{group.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2">{group.skills.map((skill) => <li key={skill} className="rounded-lg border border-white/15 bg-white/3 px-3 py-2 text-sm text-[#d5deec]">{skill}</li>)}</ul>
            <div className="mt-7 grid gap-5 border-t border-white/10 pt-6 sm:grid-cols-2">
              {group.evidence.map((item) => <Link key={item.project} href={`/projects/${item.project}`} className="group block"><span className="flex items-center gap-2 text-xs font-semibold text-[#c7ff76]">Applied in {item.name} <ArrowIcon diagonal width={13} height={13} /></span><p className="mt-2 text-xs leading-6 text-[#a8b7cd] transition-colors group-hover:text-white">{item.text}</p></Link>)}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
