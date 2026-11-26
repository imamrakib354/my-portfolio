import Image from "next/image";
import Link from "next/link";
import PageIntro from "@/components/page-intro";
import { ArrowIcon } from "@/components/icons";
import Reveal from "@/components/reveal";
import { container, section, eyebrow, title, italic, panel, primaryButton } from "@/lib/styles";

export const metadata = { title: "About", description: "Meet Imam Hossain Rakib, a full-stack developer building Next.js interfaces and Express APIs in Dhaka, Bangladesh." };

export default function AboutPage() {
    return <main><PageIntro index="01" label="THE PERSON BEHIND THE PIXELS" title={<>More than code.<br /><em className={italic}>Always curious.</em></>} description="I'm Imam Hossain Rakib—a full-stack developer who cares about how things work and how they feel to the people using them." />
    <section className={`${container} ${section} grid items-start gap-12 lg:grid-cols-[.85fr_1fr] lg:gap-20`}>
      <Reveal className="relative aspect-[.85] w-full max-w-[540px] overflow-hidden rounded-2xl border border-white/10 bg-[#172337] shadow-[0_20px_80px_#0007]"><Image src="/images/Hero-Image.png" alt="Portrait of Imam Hossain Rakib" fill sizes="(max-width: 800px) 100vw, 43vw" className="object-cover object-[center_24%] saturate-75" /><div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#090e18] to-transparent px-7 pt-20 pb-7 font-mono text-[10px] tracking-wide text-[#c7ff76]">DHAKA, BANGLADESH / ALWAYS BUILDING ↗</div></Reveal>
      <div><Reveal><p className={eyebrow}>THE SHORT VERSION</p><h2 className={title}>Building, learning,<br /><em className={italic}>then building again.</em></h2><div className="mt-7 space-y-5 text-base leading-8 text-[#a8b7cd]"><p>I studied Computer Science at Bangladesh University of Business &amp; Technology. The web became the place where my interest in problem-solving and appreciation for good design came together.</p><p>My projects have helped me grow from managing frontend interactions to connecting full-stack applications. FitLog taught me about shared state and persistence; Bazar Dor made external data useful in a Bengali-first interface. Book Nook connected a TypeScript frontend to an Express API, while MentorLagbe brought together role-based workflows and Stripe payment verification.</p><p>I&apos;m early in my professional journey. I don&apos;t see a deployed project as the finish line: I want to understand its tradeoffs, improve its rough edges, and explain the decisions behind it.</p></div></Reveal>
      <Reveal className="mt-9 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">{[
        ["01", "Think about people first.", "Clarity and usefulness matter more than noise."],
        ["02", "Stay curious.", "Every project is a chance to learn something new."],
        ["03", "Care about the details.", "Small decisions shape the whole experience."],
      ].map(([number, label, text]) => <div key={number} className={`${panel} p-5`}><span className="font-mono text-[11px] text-[#c7ff76]">{number} / HOW I THINK</span><strong className="mt-2 block font-semibold text-white">{label}</strong><p className="mt-1 text-sm text-[#9caac2]">{text}</p></div>)}</Reveal>
      <Link href="/projects" className={`${primaryButton} mt-9`}>See what I&apos;ve made <ArrowIcon diagonal width={18} height={18} /></Link></div>
    </section>
  </main>;
}
