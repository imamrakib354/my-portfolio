"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
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
  const menuButton = useRef(null);
  const header = useRef(null);
  const id = useId();
  const reducedMotion = useReducedMotion();
  const isActive = (href) => pathname === href || (href === "/projects" && pathname.startsWith("/projects/"));

  useEffect(() => {
    if (!open) return;
    const dismiss = (event) => {
      if (!header.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [open]);

  return (
    <header ref={header} className="sticky top-0 z-50 border-b border-white/10 bg-[#090e18]/95 backdrop-blur-xl" onKeyDown={(event) => {
      if (event.key === "Escape" && open) { setOpen(false); menuButton.current?.focus(); }
    }}>
      <div className={`${container} flex min-h-18 items-center gap-4 lg:min-h-20`}>
        <Link href="/" onClick={() => setOpen(false)} className="mr-auto inline-flex shrink-0 items-center gap-3" aria-label="Imam Hossain Rakib, home">
          <span className="flex size-10 items-center justify-center rounded-xl border border-[#c7ff76]/30 bg-[#c7ff76]/5 pr-1 text-[24px] font-bold tracking-[-0.14em] text-[#c7ff76]">ir<span className="text-white">.</span></span>
          <span className="text-xs font-semibold leading-tight text-white">Imam Hossain Rakib<small className="mt-1 block font-mono text-[9px] font-normal tracking-widest text-[#91a1ba]">FULL-STACK DEVELOPER</small></span>
        </Link>
        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/3 p-1 lg:flex" aria-label="Main navigation">
          {links.map((link) => <Link key={link.href} href={link.href} aria-current={isActive(link.href) ? "page" : undefined} className={`relative isolate rounded-full px-3 py-2 text-xs font-medium transition-colors xl:px-4 ${isActive(link.href) ? "text-[#090e18]" : "text-[#a9b5ca] hover:text-white"}`}>
            {isActive(link.href) && <motion.span layoutId={`${id}-navigation`} className="absolute inset-0 -z-10 rounded-full bg-[#c7ff76]" />}{link.label}
          </Link>)}
        </nav>
        <Link href="/connect" className="hidden items-center gap-2 rounded-full border border-[#c7ff76]/50 px-5 py-3 text-xs font-semibold text-[#c7ff76] transition-colors hover:bg-[#c7ff76] hover:text-[#090e18] lg:inline-flex">Let&apos;s talk <ArrowIcon diagonal width={15} height={15} /></Link>
        <button ref={menuButton} className="grid size-11 place-items-center rounded-xl border border-white/15 text-white lg:hidden" type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls={`${id}-mobile-navigation`}>{open ? <CloseIcon width={21} height={21} /> : <MenuIcon width={21} height={21} />}</button>
      </div>
      <AnimatePresence>
        {open && <motion.nav id={`${id}-mobile-navigation`} initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.2 }} className="absolute inset-x-0 top-full max-h-[calc(100dvh-72px)] overflow-y-auto border-b border-white/15 bg-[#0e1623] shadow-2xl lg:hidden" aria-label="Mobile navigation">
          <div className="mx-auto max-w-xl px-6 py-4">{links.map((link, index) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={isActive(link.href) ? "page" : undefined} className={`flex items-center gap-5 border-b border-white/10 py-4 text-lg font-semibold ${isActive(link.href) ? "text-[#c7ff76]" : "text-white"}`}><span className="font-mono text-[10px] text-[#8191ac]">0{index + 1}</span>{link.label}<ArrowIcon diagonal width={17} height={17} className="ml-auto" /></Link>)}</div>
        </motion.nav>}
      </AnimatePresence>
    </header>
  );
}
