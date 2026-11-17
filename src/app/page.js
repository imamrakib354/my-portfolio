import Image from "next/image";
import Link from "next/link";
import projects from "@/data/projects.json";
import { profile } from "@/data/profile";
import { ArrowIcon, GithubIcon, LinkedinIcon } from "@/components/icons";
import HeroConsole from "@/components/hero-console";
import HeroHeading from "@/components/hero-heading";
import FeaturedWork from "@/components/featured-work";
import SkillExplorer from "@/components/skill-explorer";
import Reveal from "@/components/reveal";
import { container, section, eyebrow, title, italic, lead, panel, primaryButton, outlineButton, textLink } from "@/lib/styles";

export default function Home() {
  const featured = projects.filter((project) => project.featured);

  return (
    <main>
      <section className="relative isolate overflow-hidden border-b border-white/10" aria-labelledby="hero-title">
        <div className="hero-grid pointer-events-none absolute inset-0 -z-10" aria-hidden="true" />
        <div className="pointer-events-none absolute -top-30 right-[-20%] -z-10 size-[850px] rounded-full bg-[radial-gradient(circle,#32479b40,transparent_65%)] blur-3xl" aria-hidden="true" />
        <div className={`${container} grid items-center gap-14 pt-14 pb-16 md:pt-20 md:pb-20 lg:grid-cols-[1.15fr_.85fr] lg:gap-10 lg:py-24`}>
          <div className="relative z-10">
            <Reveal><p className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#c7ff76]/25 bg-[#c7ff76]/5 px-4 py-2 font-mono text-[10px] tracking-wider text-[#c7ff76]"><span className="size-1.5 rounded-full bg-[#c7ff76]" /> FULL-STACK DEVELOPER / DHAKA, BD</p></Reveal>
            <Reveal delay={60}><p className="mb-4 text-sm font-medium text-[#b8c6da]">Hi, I&apos;m Rakib.</p></Reveal>
            <HeroHeading />
            <Reveal delay={120}>
              <p className={`${lead} mt-7 max-w-lg`}>I&apos;m <strong className="font-medium text-white">Imam Hossain Rakib</strong>. I build responsive applications with Next.js, TypeScript, Express, and MongoDB—from the first interaction to the API behind it.</p>
              <div className="mt-8 flex flex-wrap gap-3"><Link href="/projects" className={primaryButton}>View my projects <ArrowIcon diagonal width={17} height={17} /></Link><Link href="/connect" className={outlineButton}>Let&apos;s connect <ArrowIcon diagonal width={17} height={17} /></Link></div>
            </Reveal>
            <Reveal delay={180} className="mt-9 flex flex-wrap items-center gap-4">
              <a className="grid size-10 place-items-center rounded-full border border-white/20 text-[#b0bed2] transition-colors hover:border-[#c7ff76] hover:text-[#c7ff76]" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon width={18} height={18} /></a>
              <a className="grid size-10 place-items-center rounded-full border border-white/20 text-[#b0bed2] transition-colors hover:border-[#c7ff76] hover:text-[#c7ff76]" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon width={18} height={18} /></a>
              <span className="ml-1 flex items-center gap-2 font-mono text-[10px] tracking-wide text-[#9caac2]"><span className="size-1.5 rounded-full bg-[#c7ff76]" /> OPEN TO COLLABORATION</span>
            </Reveal>
          </div>
          <Reveal delay={150} className="relative mx-auto w-full min-w-0 max-w-[490px] lg:mr-0">
            <div data-hero-composition className="rounded-[28px] border border-[#aebeff]/20 bg-[#101827]/70 p-3 shadow-[0_30px_100px_#0006] sm:p-4">
              <div data-hero-portrait className="overflow-hidden rounded-2xl border border-white/15 bg-[#172337]">
                <div className="relative aspect-[1.2]"><Image src="/images/Hero-Image.png" alt="Imam Hossain Rakib, full-stack developer" fill sizes="(max-width: 640px) 85vw, (max-width: 1024px) 450px, 430px" preload className="object-cover object-[center_12%] saturate-75" /></div>
                <div className="flex items-center justify-between gap-3 border-t border-white/10 bg-[#0b1322] px-4 py-5 sm:px-5">
                  <div className="min-w-0"><p className="font-mono text-[9px] leading-5 tracking-[.12em] text-[#c7ff76]">THE PERSON BEHIND THE CODE</p><p data-hero-name className="mt-1 text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl">{profile.name}</p></div>
                  <span className="grid size-9 shrink-0 place-items-center rounded-full border border-[#c7ff76]/20 text-xl text-[#c7ff76]" aria-hidden="true">↗</span>
                </div>
              </div>
              <div data-hero-workspace className="mt-3 min-w-0"><HeroConsole projects={projects} /></div>
            </div>
          </Reveal>
        </div>
        <div className={`${container} flex flex-wrap items-center justify-between gap-4 border-t border-white/10 py-5 font-mono text-[10px] tracking-wider text-[#8f9fb7]`}><a href="#selected-work" className="flex items-center gap-3 text-[#c7ff76]">EXPLORE THE WORK <span aria-hidden="true">↓</span></a><span>DESIGN-MINDED. DEVELOPMENT-DRIVEN.</span><span className="hidden sm:inline">PORTFOLIO / 2026</span></div>
      </section>

      <section id="selected-work" className={`${container} ${section} section-anchor`} aria-labelledby="work-heading">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6"><div><p className={eyebrow}>01 / SELECTED WORK</p><h2 id="work-heading" className={title}>Real problems.<br /><em className={italic}>Working solutions.</em></h2><p className={`${lead} mt-5 max-w-xl`}>Three projects, three different challenges. Explore the interfaces, the implementation, and what I learned.</p></div><Link href="/projects" className={textLink}>All {projects.length} projects <ArrowIcon diagonal width={17} height={17} /></Link></Reveal>
        <FeaturedWork projects={featured} />
      </section>

      <section className={`border-y border-white/10 bg-[#0d1421] ${section}`} aria-labelledby="about-heading">
        <div className={`${container} grid gap-10 lg:grid-cols-[.8fr_1fr] lg:gap-20`}>
          <Reveal><p className={eyebrow}>02 / A LITTLE ABOUT ME</p><h2 id="about-heading" className={title}>Curiosity is<br /><em className={italic}>the starting point.</em></h2><Link href="/about" className={`${textLink} mt-8`}>Meet the developer <ArrowIcon diagonal width={17} height={17} /></Link></Reveal>
          <div>
            <Reveal><p className="max-w-2xl text-2xl font-medium leading-snug tracking-tight text-white sm:text-3xl">I enjoy connecting the details people see with the systems they don&apos;t.</p><p className="mt-6 text-base leading-8 text-[#a8b7cd]">A Computer Science graduate from BUBT, I learn by building useful things: a community book library, a Bengali market-price guide, and a workout planner. Each project has pushed me further—from managing interface state to protecting backend operations.</p></Reveal>
            <div className="mt-8 grid gap-6 border-t border-white/10 pt-7 sm:grid-cols-2">
              <Reveal><span className="font-mono text-[10px] tracking-widest text-[#c7ff76]">01 / CLARITY FIRST</span><p className="mt-3 text-sm leading-7 text-[#a8b7cd]">Make the next action obvious. Design the loading, empty, and error states—not just the happy path.</p></Reveal>
              <Reveal delay={70}><span className="font-mono text-[10px] tracking-widest text-[#aebeff]">02 / KEEP IMPROVING</span><p className="mt-3 text-sm leading-7 text-[#a8b7cd]">Understand why a solution works, acknowledge its tradeoffs, and make the next version better.</p></Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className={`${container} ${section}`} aria-labelledby="skills-heading">
        <Reveal className="mb-10 flex flex-wrap items-end justify-between gap-6"><div><p className={eyebrow}>03 / THE TOOLKIT</p><h2 id="skills-heading" className={title}>Skills with<br /><em className={italic}>something to show.</em></h2></div><Link href="/skills" className={textLink}>Explore my toolkit <ArrowIcon diagonal width={17} height={17} /></Link></Reveal>
        <SkillExplorer />
      </section>

      <section className="border-y border-white/10 bg-[#0d1421] py-12 md:py-16" aria-labelledby="education-heading">
        <div className={`${container} grid gap-8 md:grid-cols-[1fr_1.3fr] md:items-center`}>
          <Reveal><p className={eyebrow}>04 / THE FOUNDATION</p><h2 id="education-heading" className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">Grounded in learning.<br /><em className={italic}>Growing through practice.</em></h2></Reveal>
          <Reveal className="grid gap-6 sm:grid-cols-[1.6fr_.8fr]">
            <div className="border-l border-[#c7ff76]/40 pl-5"><p className="font-mono text-[10px] text-[#9caac2]">BUBT / 2022 — 2025</p><h3 className="mt-3 text-lg font-semibold">Bachelor&apos;s in Computer Science</h3><Link href="/education" className="mt-3 inline-block text-xs text-[#c7ff76]">Education & background ↗</Link></div>
            <div className="border-l border-white/15 pl-5"><p className="font-mono text-[10px] text-[#9caac2]">IELTS / OVERALL BAND</p><p className="mt-3 text-4xl font-semibold tracking-tight">7.0<span className="ml-1 text-sm font-normal text-[#9caac2]">/ 9.0</span></p><p className="mt-2 text-xs text-[#9caac2]">April 2022</p></div>
          </Reveal>
        </div>
      </section>

      <section className={`${container} py-16 md:py-20`} aria-labelledby="home-connect-heading">
        <Reveal className={`${panel} flex flex-col items-start justify-between gap-6 px-7 py-9 sm:px-10 md:flex-row md:items-center`}>
          <div><p className={eyebrow}>05 / YOUR NEXT PROJECT?</p><h2 id="home-connect-heading" className="text-2xl font-semibold tracking-tight sm:text-3xl">An idea, an opportunity, or a good conversation.</h2><p className="mt-3 text-sm leading-7 text-[#a8b7cd]">I&apos;d love to hear what you have in mind.</p></div>
          <Link href="/connect" className={`${primaryButton} shrink-0`}>Get in touch <ArrowIcon diagonal width={17} height={17} /></Link>
        </Reveal>
      </section>
    </main>
  );
}
