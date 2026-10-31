import projects from "@/data/projects.json";
import PageIntro from "@/components/page-intro";
import ProjectGallery from "@/components/project-gallery";
import { container, italic } from "@/lib/styles";

export const metadata = { title: "Projects", description: "Explore projects by Imam Hossain Rakib: Bazar Dor, FitLog, and Movie Explorer." };

export default function ProjectsPage() {
  return <main><PageIntro index="04" label="THE WORK" title={<>Ideas made<br /><em className={italic}>interactive.</em></>} description="A collection of things I've built, problems I've explored, and lessons learned along the way." /><section className="bg-[#0d1421] py-12 md:py-16"><div className={container}><ProjectGallery projects={projects} /></div></section></main>;
}
