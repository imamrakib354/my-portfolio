import Link from "next/link";
import { ArrowIcon } from "./icons";
import { profile } from "@/data/profile";
import { container } from "@/lib/styles";

export default function SiteFooter() {
  return <footer className="border-t border-white/10 bg-[#080c14] text-white">
    <div className={`${container} flex flex-col gap-10 py-20 sm:flex-row sm:items-end sm:justify-between md:py-28`}>
      <div><p className="mb-7 font-mono text-[11px] font-semibold tracking-[0.18em] text-[#c7ff76]">HAVE AN IDEA IN MIND?</p><h2 className="text-[clamp(3.2rem,7vw,7.5rem)] font-semibold leading-[1.04] tracking-[-0.075em]">Let&apos;s make<br /><em className="font-serif font-normal text-[#c7ff76]">something matter.</em></h2></div>
      <Link href="/connect" className="btn btn-circle size-18 shrink-0 border border-[#c7ff76] bg-[#c7ff76] text-[#081016] shadow-[0_0_35px_#c7ff7640] hover:rotate-45 hover:bg-white sm:size-22" aria-label="Go to contact page"><ArrowIcon diagonal width={29} height={29} /></Link>
    </div>
    <div className={`${container} flex flex-col gap-4 border-t border-white/10 py-8 text-xs text-[#91a1ba] sm:flex-row sm:justify-between`}>
      <span>© 2026 {profile.name}</span><span>Designed &amp; built with intention.</span>
      <div className="flex gap-5"><a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#c7ff76]">GitHub</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#c7ff76]">LinkedIn</a><a href={`mailto:${profile.email}`} className="hover:text-[#c7ff76]">Email</a></div>
    </div>
  </footer>;
}
