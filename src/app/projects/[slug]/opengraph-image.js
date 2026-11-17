import { ImageResponse } from "next/og";
import { notFound } from "next/navigation";
import projects from "@/data/projects.json";
import SocialCard from "@/components/social-card";

export const alt = "A project case study by Imam Hossain Rakib";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({ params }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  return new ImageResponse(<SocialCard project={project} />, size);
}
