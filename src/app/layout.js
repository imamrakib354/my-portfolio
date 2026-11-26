import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import MotionProvider from "@/components/motion-provider";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000")
  ),
  title: { default: "Imam Hossain Rakib — Full-stack Developer", template: "%s | Imam Hossain Rakib" },
  description: "Full-stack developer in Dhaka building thoughtful interfaces and the APIs behind them. Explore Next.js, TypeScript, Express, and MongoDB projects.",
  openGraph: { title: "Imam Hossain Rakib — Full-stack Developer", description: "Thoughtful interfaces. Full-stack experiences. Explore MentorLagbe, Book Nook, and more.", type: "website" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }) {
  return <html lang="en" data-theme="night" className={`${geistSans.variable} ${geistMono.variable}`}><body className="min-w-[320px] bg-[#090e18] text-[#f1f5fa] antialiased" style={{ fontFamily: "var(--font-geist-sans), Arial, sans-serif" }}><a href="#main-content" className="skip-link">Skip to content</a><MotionProvider><SiteHeader /><div id="main-content" tabIndex={-1}>{children}</div><SiteFooter /></MotionProvider></body></html>;
}
