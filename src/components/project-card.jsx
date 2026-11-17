import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./icons";
import { projectTheme } from "@/lib/project-theme";

export default function ProjectCard({ project, number }) {
  return (
    <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-[#111a29] transition-[border-color,box-shadow] duration-300 hover:border-[#c7ff76]/40 hover:shadow-[0_18px_50px_#0005]">
      <Link href={`/projects/${project.slug}`} style={projectTheme(project.accent)} className="project-stage relative block overflow-hidden px-4 pt-5 sm:px-6 sm:pt-7" aria-label={`Explore ${project.name} project`}>
        <div className="relative aspect-[1.5] overflow-hidden rounded-t-lg border border-b-0 border-white/15 shadow-lg">
          <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 700px) 90vw, (max-width: 1050px) 45vw, 600px" className="object-cover object-top transition-transform duration-500 motion-safe:group-hover:scale-[1.025]" />
        </div>
        <span className="absolute right-7 bottom-4 grid size-10 place-items-center rounded-full border border-white/25 bg-[#090e18]/90 text-white backdrop-blur transition-colors group-hover:bg-[#c7ff76] group-hover:text-[#090e18]"><ArrowIcon diagonal width={18} height={18} /></span>
      </Link>
      <div className="p-6 sm:p-7">
        <div className="flex justify-between gap-2 font-mono text-[10px] tracking-wider text-[#8f9fb7]"><span>{String(number).padStart(2, "0")} / {project.discipline?.toUpperCase() || project.category.toUpperCase()}</span><span>{project.year}</span></div>
        <Link href={`/projects/${project.slug}`} className="mt-4 flex items-center justify-between gap-3"><h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{project.name}</h3><ArrowIcon diagonal width={19} height={19} className="text-[#c7ff76] transition-transform motion-safe:group-hover:translate-x-1 motion-safe:group-hover:-translate-y-1" /></Link>
        <p className="mt-3 text-sm leading-7 text-[#a8b7cd]">{project.summary}</p>
        {project.evidence && <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-6 text-[#b8c6da]"><span className="mr-2 text-[#c7ff76]" aria-hidden="true">↳</span>{project.evidence}</p>}
        <div className="mt-5 flex flex-wrap gap-2">{project.stack.slice(0, 3).map((item) => <span key={item} className="rounded-full border border-white/15 px-3 py-1.5 font-mono text-[10px] text-[#b7c5db]">{item}</span>)}</div>
      </div>
    </article>
  );
}
