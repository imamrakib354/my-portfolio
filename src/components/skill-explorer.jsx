"use client";

import { useState } from "react";
import { handleTabKeyDown } from "@/lib/tab-navigation";

const groups = [
  { title: "Frontend", label: "BUILDING THE EXPERIENCE", description: "Interfaces that are responsive, clear, and enjoyable to use.", skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { title: "Backend & data", label: "MAKING IT WORK", description: "Connecting products to the logic and data behind them.", skills: ["Node.js", "Express.js", "MongoDB"] },
  { title: "Beyond the browser", label: "KEEPING CURIOUS", description: "Another language in my toolkit for learning and solving problems.", skills: ["Python"] },
];

export default function SkillExplorer() {
  const [active, setActive] = useState(0);
  const group = groups[active];

  return <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#101827] md:grid-cols-[.38fr_1fr]">
    <div className="border-b border-white/10 p-4 md:border-r md:border-b-0" role="tablist" aria-label="Skill categories">{groups.map((item, index) => <button key={item.title} id={`skill-tab-${index}`} type="button" role="tab" tabIndex={active === index ? 0 : -1} aria-selected={active === index} aria-controls="skill-panel" onClick={() => setActive(index)} onKeyDown={(event) => handleTabKeyDown(event, active, groups.length, setActive, "skill-tab")} className={`mb-2 flex w-full items-center justify-between rounded-xl border px-4 py-4 text-left text-sm font-semibold transition-colors sm:text-base ${active === index ? "border-[#c7ff76] bg-[#c7ff76]/10 text-[#c7ff76]" : "border-transparent text-[#a9b5ca] hover:border-white/15 hover:text-white"}`}><span><span className="mr-3 font-mono text-[10px]">0{index + 1}</span>{item.title}</span><span aria-hidden="true">↗</span></button>)}</div>
    <div id="skill-panel" role="tabpanel" aria-labelledby={`skill-tab-${active}`} className="min-h-75 p-6 sm:p-9" aria-live="polite"><span className="font-mono text-[10px] tracking-[.16em] text-[#c7ff76]">{group.label}</span><h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{group.title}</h3><p className="mt-3 max-w-md text-sm leading-7 text-[#9caac2]">{group.description}</p><div className="mt-8 flex flex-wrap gap-3">{group.skills.map((skill) => <span key={skill} className="badge h-auto rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-sm text-white transition-all hover:-translate-y-1 hover:border-[#c7ff76] hover:bg-[#c7ff76]/10 motion-reduce:hover:translate-y-0">{skill}<span className="ml-3 text-[#c7ff76]" aria-hidden="true">✳</span></span>)}</div></div>
  </div>;
}
