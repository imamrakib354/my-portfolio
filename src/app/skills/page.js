import Link from "next/link";
import PageIntro from "@/components/page-intro";
import SkillExplorer from "@/components/skill-explorer";
import { ArrowIcon } from "@/components/icons";
import Reveal from "@/components/reveal";
import { container, section, eyebrow, title, italic, primaryButton } from "@/lib/styles";

export const metadata = { title: "Skills", description: "The languages, frameworks, and tools Imam Hossain Rakib uses to build web applications." };

export default function SkillsPage() {
  return <main><PageIntro index="03" label="MY TOOLKIT" title={<>Good tools.<br /><em className={italic}>Better questions.</em></>} description="Technology is the means, not the end. Explore the toolkit I use to make ideas real." />
    <section className={`border-b border-white/10 bg-[#0d1421] ${section}`}><div className={container}><Reveal className="mb-10 flex flex-col justify-between gap-5 sm:flex-row"><span className={eyebrow}>INTERACTIVE TOOLKIT / SELECT A CATEGORY</span><p className="text-2xl font-semibold leading-tight tracking-tight md:text-4xl">Built through learning.<br /><em className={italic}>Sharpened through making.</em></p></Reveal><Reveal><SkillExplorer /></Reveal></div></section>
    <section className={`${container} ${section}`}><Reveal><p className={eyebrow}>THE MOST IMPORTANT SKILL</p><h2 className={title}>Staying curious about<br /><em className={italic}>what comes next.</em></h2><Link href="/projects" className={`${primaryButton} mt-8`}>See these skills in action <ArrowIcon diagonal width={18} height={18} /></Link></Reveal></section>
  </main>;
}
