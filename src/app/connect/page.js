import Link from "next/link";
import { profile } from "@/data/profile";
import PageIntro from "@/components/page-intro";
import { ArrowIcon, GithubIcon, LinkedinIcon, MailIcon } from "@/components/icons";
import Reveal from "@/components/reveal";
import CopyEmail from "@/components/copy-email";
import { container, section, eyebrow, title, italic, panel, textLink } from "@/lib/styles";

export const metadata = { title: "Connect", description: "Get in touch with Imam Hossain Rakib by email, GitHub, or LinkedIn." };

export default function ConnectPage() {
  return <main><PageIntro index="05" label="LET'S CONNECT" title={<>Let&apos;s start<br /><em className={italic}>a conversation.</em></>} description="Have an idea, an opportunity, or just want to say hello? My inbox is open." />
    <section className={`border-b border-white/10 bg-[#0d1421] ${section}`}><div className={`${container} grid gap-5 lg:grid-cols-[1.1fr_.9fr]`}>
      <Reveal className="relative isolate flex min-h-[420px] flex-col items-start overflow-hidden rounded-2xl border border-[#c7ff76]/30 bg-[#121d2b] p-8 text-white sm:p-12"><div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_90%,#3d59884d,transparent_65%)]" /><div className="flex w-full items-center justify-between"><span className="font-mono text-[10px] text-[#c7ff76]">THE DIRECT LINE</span><MailIcon width={27} height={27} className="text-[#c7ff76]" /></div><h2 className="mt-auto text-5xl font-semibold leading-tight tracking-[-0.07em] sm:text-6xl">Tell me what<br />you&apos;re <em className="font-serif font-normal text-[#c7ff76]">thinking.</em></h2><a href={`mailto:${profile.email}`} className="mt-6 inline-flex max-w-full items-center gap-3 border-b border-[#c7ff76] pb-2 text-base text-[#c7ff76] hover:text-white sm:text-xl"><span className="break-all">{profile.email}</span><ArrowIcon diagonal width={22} height={22} className="shrink-0" /></a><CopyEmail email={profile.email} /></Reveal>
      <div className={`${panel} p-7 sm:p-9`}><Reveal><p className={eyebrow}>FIND ME ONLINE</p><h2 className={`${title} mb-9`}>Elsewhere on<br /><em className={italic}>the internet.</em></h2></Reveal>
        {[["GitHub", "Code, projects & experiments", profile.github, GithubIcon], ["LinkedIn", "Let’s connect professionally", profile.linkedin, LinkedinIcon]].map(([label, description, url, Icon], index) => <Reveal key={label} delay={index * 80}><a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 border-t border-white/10 py-5 hover:text-[#c7ff76]"><Icon width={24} height={24} /><span className="flex-1 text-lg font-semibold">{label}<small className="mt-1 block text-xs font-normal text-[#9caac2]">{description}</small></span><ArrowIcon diagonal width={20} height={20} /></a></Reveal>)}
        <div className="mt-9 flex items-center gap-3 font-mono text-[10px] uppercase text-[#9caac2]"><span className="status status-success" /> CURRENTLY BASED IN {profile.location}</div>
      </div>
    </div></section>
    <section className={`${container} ${section}`}><Reveal><p className={eyebrow}>SOMEWHERE TO START?</p><h2 className={title}>Take a look at<br /><em className={italic}>what I&apos;ve made.</em></h2><Link href="/projects" className={`${textLink} mt-8`}>Explore my projects <ArrowIcon diagonal width={18} height={18} /></Link></Reveal></section>
  </main>;
}
