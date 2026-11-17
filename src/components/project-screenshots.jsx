"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import ImageLightbox from "./image-lightbox";
import { ArrowIcon } from "./icons";
import { handleTabKeyDown } from "@/lib/tab-navigation";
import { projectTheme } from "@/lib/project-theme";

export default function ProjectScreenshots({ project }) {
  const [active, setActive] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const id = useId();
  const reducedMotion = useReducedMotion();
  const images = project.screenshots;
  const image = images[active];

  return (
    <div style={projectTheme(project.accent)} className="grid gap-5 lg:grid-cols-[240px_minmax(0,1fr)]">
      <div role="tablist" aria-label={`${project.name} screenshots`} className="flex gap-2 overflow-x-auto p-1 pb-3 lg:flex-col lg:overflow-visible">
        {images.map((item, index) => (
          <button
            key={item.src}
            id={`${id}-tab-${index}`}
            role="tab"
            aria-selected={active === index}
            aria-controls={`${id}-panel`}
            tabIndex={active === index ? 0 : -1}
            onClick={() => setActive(index)}
            onKeyDown={(event) => handleTabKeyDown(event, active, images.length, setActive, `${id}-tab`)}
            className={`flex min-w-max items-center gap-4 rounded-xl border px-4 py-4 text-left transition-colors lg:min-w-0 ${active === index ? "border-[var(--project-accent)]/60 bg-white/5 text-[var(--project-accent)]" : "border-white/10 text-[#a8b7cd] hover:border-white/30 hover:text-white"}`}
          >
            <span className="font-mono text-[10px] text-[#91a1ba]">{String(index + 1).padStart(2, "0")}</span>
            <span className="text-sm font-medium">{item.title}</span>
          </button>
        ))}
      </div>
      <div id={`${id}-panel`} role="tabpanel" aria-labelledby={`${id}-tab-${active}`} className="min-w-0 overflow-hidden rounded-2xl border border-white/10 bg-[#101827]">
        <div className="project-stage p-3 sm:p-6">
          <div className="mb-4 flex items-center gap-1.5 px-1" aria-hidden="true"><span className="size-2 rounded-full bg-white/35" /><span className="size-2 rounded-full bg-white/20" /><span className="size-2 rounded-full bg-white/10" /><span className="ml-auto font-mono text-[10px] text-white/60">SCREEN {String(active + 1).padStart(2, "0")} / {project.name}</span></div>
          <button type="button" onClick={() => setExpanded(true)} className="group relative block aspect-[16/10] w-full overflow-hidden rounded-lg bg-[#090e18] shadow-2xl" aria-label={`Enlarge ${image.title} screenshot`}>
            <AnimatePresence initial={false}>
              <motion.div key={image.src} className="absolute inset-0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.2 }}>
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 1024px) 92vw, 900px" className="object-cover object-top" />
              </motion.div>
            </AnimatePresence>
            <span className="absolute right-3 bottom-3 flex items-center gap-2 rounded-full border border-white/25 bg-[#090e18]/90 px-4 py-2 text-xs text-white backdrop-blur transition-colors group-hover:bg-[#c7ff76] group-hover:text-[#090e18]">View full screen <ArrowIcon diagonal width={14} height={14} /></span>
          </button>
        </div>
        <div className="px-5 py-6 sm:px-7" aria-live="polite">
          <h3 className="text-xl font-semibold">{image.title}</h3>
          <p className="mt-2 max-w-3xl text-sm leading-7 text-[#a8b7cd]">{image.caption}</p>
          <p className="mt-3 font-mono text-[10px] text-[#8191ac]">PREVIEW CROPPED FOR DISPLAY · OPEN TO EXPLORE THE FULL IMAGE</p>
        </div>
      </div>
      <ImageLightbox images={images} index={active} open={expanded} onClose={() => setExpanded(false)} onNavigate={setActive} />
    </div>
  );
}
