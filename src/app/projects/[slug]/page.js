import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import projects from "@/data/projects.json";
import { ArrowIcon, GithubIcon } from "@/components/icons";
import ProjectCard from "@/components/project-card";
import ProjectFacts from "@/components/project-facts";
import ProjectScreenshots from "@/components/project-screenshots";
import ProjectFlow from "@/components/project-flow";
import TechnicalFlow from "@/components/technical-flow";
import ReadingProgress from "@/components/reading-progress";
import TechnicalDecisions from "@/components/technical-decisions";
import Reveal from "@/components/reveal";
import { projectTheme } from "@/lib/project-theme";
import { container, section, eyebrow, title, italic, lead, primaryButton, outlineButton } from "@/lib/styles";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.name,
    description: project.summary,
    openGraph: { title: `${project.name} — Imam Hossain Rakib`, description: project.summary },
  };
}

export default function ProjectDetailPage({ params }) {
  return (
    <Suspense fallback={<main className={`${container} py-16`} aria-busy="true"><p role="status" className="text-sm text-[#a8b7cd]">Loading project…</p></main>}>
      <ProjectDetails params={params} />
    </Suspense>
  );
}

async function ProjectDetails({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const hasCaseStudy = Boolean(project.screenshots?.length);

  return (
    <main>
      <ReadingProgress />
      <section className={`${container} pt-9 pb-12 md:pb-16`}>
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-[#a8b7cd] hover:text-[#c7ff76]"><ArrowIcon width={14} height={14} className="rotate-180" /> All projects</Link>
        <Reveal className="mt-12 md:mt-18">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className={eyebrow}>{hasCaseStudy ? "A PROJECT, UNPACKED" : "PROJECT OVERVIEW"} / {project.category}</p>
            <span className="mb-5 font-mono text-[10px] text-[#9caac2]">{project.year} / {project.discipline}</span>
          </div>
          <h1 className="text-[clamp(3.2rem,8vw,8.5rem)] font-semibold leading-[1.05] tracking-[-0.075em]">{project.name}<span className="text-[#c7ff76]">.</span></h1>
          <p className={`${lead} mt-6 max-w-2xl`}>{project.summary}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className={primaryButton}>Visit live site <ArrowIcon diagonal width={17} height={17} /></a>
            <a href={project.github} target="_blank" rel="noopener noreferrer" className={outlineButton}><GithubIcon width={17} height={17} /> {project.serverGithub ? "Frontend" : "Source code"}</a>
            {project.serverGithub && <a href={project.serverGithub} target="_blank" rel="noopener noreferrer" className={outlineButton}><GithubIcon width={17} height={17} /> Backend</a>}
          </div>
        </Reveal>
        <div className="mt-10"><ProjectFacts project={project} /></div>
      </section>

      <div className={container}>
        <div style={projectTheme(project.accent)} className="project-stage overflow-hidden rounded-2xl border border-white/10 p-3 sm:p-7 lg:p-10">
          <div className="mb-4 flex items-center gap-2"><span className="size-2 rounded-full bg-white/40" /><span className="size-2 rounded-full bg-white/25" /><span className="size-2 rounded-full bg-white/15" /><span className="ml-auto font-mono text-[10px] text-[var(--project-accent)]">{project.slug} / product preview</span></div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-white/10 shadow-[0_20px_60px_#0006]">
            <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 800px) 94vw, 1200px" preload className="object-cover object-top" />
          </div>
        </div>
        {hasCaseStudy && <nav aria-label="Case study sections" className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-b border-white/10 pb-6 text-xs text-[#a8b7cd]">
          {[["overview", "The project"], ["screens", "The experience"], ["architecture", "Under the hood"], ["decisions", "The decisions"], ["reflection", "Looking back"]].map(([id, label]) => <a key={id} href={`#${id}`} className="hover:text-[#c7ff76]">{label} <span aria-hidden="true">↗</span></a>)}
        </nav>}
      </div>

      <section id="overview" className={`${container} ${section} section-anchor grid gap-8 md:grid-cols-[.7fr_1fr] lg:gap-20`}>
        <Reveal><p className={eyebrow}>01 / THE PROJECT</p><h2 className={title}>The idea behind<br /><em className={italic}>the interface.</em></h2></Reveal>
        <Reveal>
          <p className={lead}>{project.overview}</p>
          <div className="mt-8 grid gap-7 sm:grid-cols-2">
            <div><h3 className="font-mono text-[10px] tracking-wider text-[#aebeff]">THE CHALLENGE</h3><p className="mt-3 text-sm leading-7 text-[#a8b7cd]">{project.challenge}</p></div>
            <div><h3 className="font-mono text-[10px] tracking-wider text-[#aebeff]">MY APPROACH</h3><p className="mt-3 text-sm leading-7 text-[#a8b7cd]">{project.solution}</p></div>
          </div>
        </Reveal>
      </section>

      {hasCaseStudy && <section id="screens" className={`section-anchor border-y border-white/10 bg-[#0d1421] ${section}`}>
        <div className={container}>
          <Reveal className="mb-10"><p className={eyebrow}>02 / THE EXPERIENCE</p><h2 className={title}>More than<br /><em className={italic}>a homepage.</em></h2><p className={`${lead} mt-5 max-w-xl`}>Explore the screens and the thinking behind them. Select a view, then open it for a closer look.</p></Reveal>
          <ProjectScreenshots project={project} />
        </div>
      </section>}

      {project.architecture && <section id="architecture" className={`${container} ${section} section-anchor`}>
        <Reveal className="mb-10"><p className={eyebrow}>03 / UNDER THE HOOD</p><h2 className={title}>How the pieces<br /><em className={italic}>work together.</em></h2></Reveal>
        <ProjectFlow project={project} />
        {project.technicalFlows?.length > 0 && <TechnicalFlow flows={project.technicalFlows} />}
      </section>}

      {project.decisions?.length > 0 && <section id="decisions" className={`section-anchor border-y border-white/10 bg-[#0d1421] ${section}`}>
        <div className={container}>
          <Reveal className="mb-12"><p className={eyebrow}>04 / ENGINEERING NOTES</p><h2 className={title}>The choices.<br /><em className={italic}>And the tradeoffs.</em></h2><p className={`${lead} mt-5 max-w-xl`}>Not just what I used, but why I used it—and what I would improve next.</p></Reveal>
          <TechnicalDecisions decisions={project.decisions} />
        </div>
      </section>}

      <section className={`${container} ${section} grid gap-10 md:grid-cols-[.7fr_1fr] lg:gap-20`}>
        <Reveal><p className={eyebrow}>THE TOOLKIT & CAPABILITIES</p><h2 className={title}>Built to be<br /><em className={italic}>used.</em></h2></Reveal>
        <div>
          <ul className="divide-y divide-white/10 border-y border-white/10">{project.features.map((feature, index) => <li key={feature} className="flex items-start gap-4 py-5"><span className="pt-1 font-mono text-[10px] text-[#c7ff76]">{String(index + 1).padStart(2, "0")}</span><span className="text-base leading-7">{feature}</span></li>)}</ul>
          <div className="mt-8 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="rounded-full border border-white/15 px-4 py-2 font-mono text-xs text-[#b7c5db]">{item}</span>)}</div>
        </div>
      </section>

      {project.lessons?.length > 0 && <section id="reflection" className={`section-anchor border-t border-white/10 bg-[#0d1421] ${section}`}>
        <div className={container}>
          <Reveal className="mb-10"><p className={eyebrow}>05 / LOOKING BACK, MOVING FORWARD</p><h2 className={title}>Built it. Learned.<br /><em className={italic}>Still improving.</em></h2></Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {[["WHAT I LEARNED", project.lessons, "text-[#c7ff76]"], ["WHAT COMES NEXT", project.improvements, "text-[#aebeff]"]].map(([label, items, color]) => <Reveal key={label} className="rounded-2xl border border-white/10 p-7 sm:p-9"><h3 className={`font-mono text-[11px] tracking-widest ${color}`}>{label}</h3><ul className="mt-7 space-y-5">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-7 text-[#b0bed2]"><span className={color} aria-hidden="true">↳</span>{item}</li>)}</ul></Reveal>)}
          </div>
        </div>
      </section>}

      <section className={`${container} ${section} border-t border-white/10`}>
        <div className="mb-9 flex flex-wrap items-end justify-between gap-5"><div><p className={eyebrow}>KEEP EXPLORING</p><h2 className={title}>Another problem.<br /><em className={italic}>Another project.</em></h2></div><Link href="/projects" className="text-sm font-semibold text-[#c7ff76]">All projects ↗</Link></div>
        <div className="max-w-lg"><ProjectCard project={next} number={projects.indexOf(next) + 1} /></div>
      </section>
    </main>
  );
}
