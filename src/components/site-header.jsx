"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowIcon, CloseIcon, MenuIcon } from "./icons";
import { container } from "@/lib/styles";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/education", label: "Education" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/connect", label: "Connect" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return <header className="sticky top-0 z-50 border-b border-white/10 bg-[#090e18]/90 backdrop-blur-xl">
    <div className={`${container} navbar min-h-18 gap-4 lg:min-h-20`}>
      <Link href="/" onClick={() => setOpen(false)} className="mr-auto inline-flex shrink-0 items-center gap-3" aria-label="Imam Hossain Rakib, home">
        <span className="flex size-10 items-center justify-center rounded-xl border border-[#c7ff76]/40 bg-[#c7ff76]/10 pr-1 text-[24px] font-bold tracking-[-0.14em] text-[#c7ff76] shadow-[0_0_20px_#c7ff7620]">ir<span className="text-white">.</span></span>
        <span className="text-xs font-bold leading-tight text-white">Imam Hossain Rakib<small className="mt-1 block font-mono text-[9px] font-medium tracking-widest text-[#91a1ba]">WEB DEVELOPER</small></span>
      </Link>
      <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 lg:flex" aria-label="Main navigation">
        {links.map((link) => <Link key={link.href} href={link.href} aria-current={pathname === link.href ? "page" : undefined} className={`rounded-full px-3 py-2 text-xs font-medium transition-colors xl:px-4 ${pathname === link.href || (link.href === "/projects" && pathname.startsWith("/projects/")) ? "bg-[#c7ff76] text-[#081016]" : "text-[#a9b5ca] hover:bg-white/10 hover:text-white"}`}>{link.label}</Link>)}
      </nav>
      <Link href="/connect" className="btn hidden min-h-10 rounded-full border-[#c7ff76] bg-transparent px-5 text-xs text-[#c7ff76] hover:bg-[#c7ff76] hover:text-[#081016] lg:inline-flex">Let&apos;s talk <ArrowIcon diagonal width={15} height={15} /></Link>
      <button className="btn btn-square rounded-xl border border-white/10 bg-[#111a29] text-white lg:hidden" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-navigation">{open ? <CloseIcon /> : <MenuIcon />}</button>
    </div>
    <nav id="mobile-navigation" className={`${open ? "block" : "hidden"} absolute inset-x-0 top-full border-b border-white/10 bg-[#0e1623] px-5 py-4 shadow-2xl lg:hidden`} aria-label="Mobile navigation" inert={!open}>
      <div className="mx-auto max-w-xl">{links.map((link, index) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className={`flex items-center gap-5 border-b border-white/10 py-4 text-lg font-semibold ${pathname === link.href ? "text-[#c7ff76]" : "text-white"}`}><span className="font-mono text-[10px] text-[#c7ff76]">0{index + 1}</span>{link.label}<ArrowIcon diagonal width={17} height={17} className="ml-auto" /></Link>)}</div>
    </nav>
  </header>;
}
