import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "@/data/projects.json";
import { ArrowIcon, GithubIcon } from "@/components/icons";
import ProjectCard from "@/components/project-card";
import Reveal from "@/components/reveal";
import { container, section, eyebrow, title, italic, lead, panel, primaryButton, outlineButton } from "@/lib/styles";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) return { title: "Project not found" };
  return { title: project.name, description: project.summary, openGraph: { title: `${project.name} — Imam Hossain Rakib`, description: project.summary } };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const next = projects[(projects.indexOf(project) + 1) % projects.length];

  return <main>
    <section className={`${container} pt-9 pb-14`}><Link href="/projects" className="inline-flex items-center text-sm text-[#9caac2] hover:text-[#c7ff76]">← &nbsp; All projects</Link><div className="mt-15 flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className={eyebrow}>PROJECT / {String(projects.indexOf(project) + 1).padStart(2, "0")} — {project.category.toUpperCase()}</p><h1 className="text-[clamp(4.2rem,9vw,10rem)] font-semibold leading-none tracking-[-0.09em] text-white">{project.name}<span className="text-[#c7ff76]">.</span></h1><p className={`${lead} mt-5 max-w-2xl`}>{project.summary}</p></div><span className="pb-1 font-mono text-[10px] uppercase text-[#9caac2]">{project.year} / {project.type}</span></div><div className="mt-8 flex flex-wrap gap-3"><a href={project.demo} target="_blank" rel="noopener noreferrer" className={primaryButton}>Explore live site <ArrowIcon diagonal width={18} height={18} /></a><a href={project.github} target="_blank" rel="noopener noreferrer" className={outlineButton}>View source <GithubIcon width={18} height={18} /></a></div></section>
    <div className={container}><div className={`overflow-hidden rounded-2xl border border-white/10 p-3 sm:p-8 lg:p-12 ${project.accent === "green" ? "bg-[#193c36]" : project.accent === "lime" ? "bg-[#252e22]" : "bg-[#251b3d]"}`}><div className="flex items-center gap-2 pb-5"><span className="size-2.5 rounded-full bg-[#ff6d74]" /><span className="size-2.5 rounded-full bg-[#f9c65b]" /><span className="size-2.5 rounded-full bg-[#c7ff76]" /><span className="ml-auto font-mono text-[10px] text-white/70">{project.slug} / preview</span></div><div className="relative h-[360px] overflow-hidden rounded-lg bg-[#111a29] shadow-[0_25px_70px_#0009] sm:h-[500px] lg:h-[680px]"><Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 800px) 100vw, 1200px" priority className="object-cover object-top" /></div><div className="mt-5 flex justify-between font-mono text-[10px] tracking-wide text-white/80"><span>PROJECT PREVIEW</span><span>{project.name.toUpperCase()} ↗</span></div></div></div>
    <section className={`${container} ${section} grid gap-12 md:grid-cols-[1.25fr_.75fr] lg:gap-24`}><Reveal><p className={eyebrow}>THE OVERVIEW</p><h2 className={title}>A little more<br /><em className={italic}>about the work.</em></h2><p className={`${lead} mt-8 max-w-2xl`}>{project.overview}</p></Reveal><Reveal className={`${panel} self-start divide-y divide-white/10 px-6`}>{[["ROLE", "Design & development"], ["PROJECT TYPE", project.type], ["YEAR", project.year]].map(([label, value]) => <div key={label} className="flex justify-between gap-4 py-5"><span className="font-mono text-[10px] text-[#c7ff76]">{label}</span><strong className="text-right text-sm font-medium text-white">{value}</strong></div>)}</Reveal></section>
    <section className={`border-y border-white/10 bg-[#0d1421] ${section}`}><div className={container}><Reveal><p className={eyebrow}>THE THINKING</p><h2 className={title}>From problem<br /><em className={italic}>to product.</em></h2></Reveal><div className="mt-10 grid gap-5 md:grid-cols-2">{[["01 / THE CHALLENGE", "What needed solving", project.challenge], ["02 / THE APPROACH", "How I approached it", project.solution]].map(([label, heading, text], index) => <Reveal key={label} delay={index * 100} className={`${panel} p-8`}><span className="font-mono text-[10px] text-[#c7ff76]">{label}</span><h3 className="mt-9 text-2xl font-semibold tracking-tight text-white">{heading}</h3><p className="mt-3 leading-7 text-[#9caac2]">{text}</p></Reveal>)}</div></div></section>
    <section className={`${container} ${section} grid gap-10 md:grid-cols-[.7fr_1fr] lg:gap-20`}><Reveal><p className={eyebrow}>WHAT&apos;S INSIDE</p><h2 className={title}>The details that<br /><em className={italic}>make it work.</em></h2></Reveal><div><Reveal className="divide-y divide-white/10 border-y border-white/10">{project.features.map((feature, index) => <div key={feature} className="grid grid-cols-[35px_1fr_18px] items-center gap-3 py-5"><span className="font-mono text-[11px] text-[#c7ff76]">{String(index + 1).padStart(2, "0")}</span><strong className="font-medium tracking-tight sm:text-lg">{feature}</strong><span aria-hidden="true" className="text-[#c7ff76]">↗</span></div>)}</Reveal><Reveal className="mt-9"><span className="font-mono text-[10px] text-[#9caac2]">BUILT WITH</span><div className="mt-4 flex flex-wrap gap-2">{project.stack.map((item) => <span key={item} className="badge badge-outline h-auto rounded-full border-white/20 p-4 font-mono text-xs text-[#b7c5db]">{item}</span>)}</div></Reveal></div></section>
    <section className={`border-t border-white/10 bg-[#0d1421] ${section}`}><div className={container}><Reveal><p className={eyebrow}>KEEP EXPLORING</p><h2 className={`${title} mb-9`}>Up next <em className={italic}>↗</em></h2></Reveal><div className="max-w-md"><ProjectCard project={next} number={projects.indexOf(next) + 1} /></div></div></section>
  </main>;
}
