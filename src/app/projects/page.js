import projects from "@/data/projects.json";
import PageIntro from "@/components/page-intro";
import ProjectGallery from "@/components/project-gallery";
import { container, italic } from "@/lib/styles";

export const metadata = { title: "Projects", description: "Explore Book Nook, Bazar Dor, FitLog, and Movie Explorer: application walkthroughs, architecture, and technical decisions by Imam Hossain Rakib." };

export default function ProjectsPage() {
  return <main><PageIntro index="04" label="THE WORK" title={<>Beyond the<br /><em className={italic}>first impression.</em></>} description="Explore the interfaces, the systems behind them, and the decisions that connected the two. Three in-depth case studies, plus an earlier frontend project." /><section className="bg-[#0d1421] py-12 md:py-16"><div className={container}><ProjectGallery projects={projects} /></div></section></main>;
}
