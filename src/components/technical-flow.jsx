"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowIcon } from "./icons";

function Flow({ flow }) {
  const [active, setActive] = useState(0);
  const id = useId();
  const reducedMotion = useReducedMotion();

  return (
    <article className="editorial-panel rounded-2xl border border-white/10 p-5 sm:p-8">
      <p className="font-mono text-[10px] tracking-widest text-[#c7ff76]">{flow.label}</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{flow.title}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-7 text-[#a8b7cd]">{flow.description}</p>
      <ol className="mt-7 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
        {flow.steps.map((step, index) => <li key={step.title}>
          <button type="button" aria-pressed={active === index} aria-controls={`${id}-detail`} onClick={() => setActive(index)} className={`flex h-full min-h-16 w-full items-center gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors ${active === index ? "border-[#c7ff76]/50 bg-[#c7ff76]/5 text-[#c7ff76]" : "border-white/10 bg-[#090e18]/40 text-[#c3cede] hover:border-white/30"}`}>
            <span className="font-mono text-[10px] text-[#91a1ba]">{String(index + 1).padStart(2, "0")}</span><span className="font-medium">{step.title}</span><ArrowIcon width={14} height={14} className="ml-auto shrink-0" />
          </button>
        </li>)}
      </ol>
      <div id={`${id}-detail`} className="mt-4 min-h-20 rounded-xl border border-white/5 bg-[#090e18]/55 p-5" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.p key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.16 }} className="text-sm leading-7 text-[#c2cddc]">{flow.steps[active].detail}</motion.p>
        </AnimatePresence>
      </div>
      <p className="mt-5 text-xs leading-6 text-[#a8b7cd]"><span className="mr-2 text-[#aebeff]" aria-hidden="true">↳</span>{flow.note}</p>
    </article>
  );
}

export default function TechnicalFlow({ flows }) {
  return <div className="mt-6 grid gap-5">{flows.map((flow) => <Flow key={flow.label} flow={flow} />)}</div>;
}
