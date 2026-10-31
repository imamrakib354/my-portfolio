import { container, eyebrow, pageTitle, lead } from "@/lib/styles";

export default function PageIntro({ index, label, title, description }) {
  return <section className="relative isolate overflow-hidden border-b border-white/10">
    <div className="pointer-events-none absolute -top-50 right-[-12%] -z-10 size-[650px] rounded-full bg-[radial-gradient(circle,#344d9b45,transparent_65%)] blur-3xl" aria-hidden="true" />
    <div className={`${container} relative py-14 md:py-18`}><div className="mb-7 flex items-center justify-between border-b border-white/10 pb-5 font-mono text-[10px] tracking-widest text-[#8191ac]"><span>PORTFOLIO / {index}</span><span>IMAM HOSSAIN RAKIB ↗</span></div><p className={eyebrow}>{index} / {label}</p><h1 className={pageTitle}>{title}</h1><p className={`${lead} mt-5 max-w-xl`}>{description}</p></div>
  </section>;
}
