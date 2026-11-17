"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { handleTabKeyDown } from "@/lib/tab-navigation";

export default function HeroConsole({ projects }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const reducedMotion = useReducedMotion();
  const commands = [
    { label: "whoami", rows: [["name", "Imam Hossain Rakib"], ["focus", "full-stack web development"], ["based", "Dhaka, Bangladesh"]] },
    { label: "toolkit", rows: [["web", "Next.js / TypeScript"], ["api", "Express / MongoDB"], ["auth", "Better Auth / JWT"]] },
    { label: "projects", rows: [["built", `${projects.length} projects`], ["latest", projects[0].name], ["also", projects.slice(1, 3).map((project) => project.name).join(" / ")]] },
  ];
  const row = {
    hidden: { opacity: 0, y: reducedMotion ? 0 : 7 },
    visible: { opacity: 1, y: 0, transition: { duration: reducedMotion ? 0 : 0.22 } },
  };

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-white/15 bg-[#0b101b]">
      <div className="flex items-center gap-2 border-b border-white/10 bg-white/3 px-4 py-3"><span className="size-2 rounded-full bg-[#ff8b8f]/80" /><span className="size-2 rounded-full bg-[#f9c65b]/80" /><span className="size-2 rounded-full bg-[#c7ff76]/80" /><span className="ml-auto font-mono text-[10px] text-[#8999ae]">rakib / workspace</span></div>
      <div className="flex gap-1 border-b border-white/10 px-3 py-2" role="tablist" aria-label="Developer workspace">
        {commands.map((command, index) => <button key={command.label} id={`${id}-${index}`} type="button" role="tab" tabIndex={active === index ? 0 : -1} aria-selected={active === index} aria-controls={`${id}-panel`} onClick={() => setActive(index)} onKeyDown={(event) => handleTabKeyDown(event, active, commands.length, setActive, id)} className={`rounded-md px-3 py-2 font-mono text-[10px] transition-colors sm:text-xs ${active === index ? "bg-[#c7ff76]/10 text-[#c7ff76]" : "text-[#8999ae] hover:bg-white/5 hover:text-white"}`}>./{command.label}</button>)}
      </div>
      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-${active}`} className="min-h-40 px-4 py-4 font-mono text-[11px] leading-7 text-[#c0cde0] sm:px-5 sm:text-xs" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={active} initial="hidden" animate="visible" exit={{ opacity: 0 }} variants={{ hidden: {}, visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.09 } } }} transition={{ duration: reducedMotion ? 0 : 0.12 }}>
            <motion.p variants={row}><span className="text-[#6b86b2]">$</span> ./rakib --{commands[active].label}</motion.p>
            {commands[active].rows.map(([label, value], index) => <motion.p key={label} variants={row}><span className="text-[#c7ff76]">{label}:</span> {value}{index === commands[active].rows.length - 1 && <span className="ml-1 inline-block h-3.5 w-1.5 bg-[#c7ff76] align-middle" aria-hidden="true" />}</motion.p>)}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
