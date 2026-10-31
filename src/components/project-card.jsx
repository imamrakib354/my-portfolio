import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./icons";

export default function ProjectCard({ project, number }) {
  return <article className="card group h-full overflow-hidden rounded-2xl border border-white/10 bg-[#111a29] shadow-none transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c7ff76]/50 hover:shadow-[0_18px_50px_#0006] motion-reduce:hover:translate-y-0">
    <Link href={`/projects/${project.slug}`} className="relative block overflow-hidden bg-[#1b2940]" aria-label={`Explore ${project.name} project`}>
      <div className="relative aspect-[1.35] w-full"><Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 33vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-105 motion-reduce:group-hover:scale-100" /></div>
      <span className="absolute right-4 bottom-4 grid size-11 place-items-center rounded-full border border-white/20 bg-[#090e18]/85 text-white backdrop-blur group-hover:border-[#c7ff76] group-hover:bg-[#c7ff76] group-hover:text-[#081016]"><ArrowIcon diagonal width={21} height={21} /></span>
    </Link>
    <div className="card-body gap-0 p-6">
      <div className="flex justify-between gap-2 font-mono text-[10px] font-semibold uppercase tracking-wide text-[#c7ff76]"><span>{String(number).padStart(2, "0")} / {project.category}</span><span>{project.year}</span></div>
      <Link href={`/projects/${project.slug}`} className="mt-5 flex items-center justify-between gap-3"><h3 className="text-2xl font-semibold tracking-[-0.05em] text-white lg:text-3xl">{project.name}</h3><ArrowIcon diagonal width={20} height={20} className="text-[#c7ff76]" /></Link>
      <p className="my-4 min-h-14 text-sm leading-6 text-[#9caac2]">{project.summary}</p>
      <div className="flex flex-wrap gap-2">{project.stack.slice(0, 3).map((item) => <span key={item} className="badge badge-outline rounded-full border-white/15 p-3 font-mono text-[10px] text-[#b7c5db]">{item}</span>)}</div>
    </div>
  </article>;
}
