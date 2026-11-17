import { ImageResponse } from "next/og";
import SocialCard from "@/components/social-card";

export const alt = "Imam Hossain Rakib — Thoughtful interfaces. Full-stack experiences.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(<SocialCard />, size);
}
