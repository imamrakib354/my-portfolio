import { Geist, Geist_Mono } from "next/font/google";
import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: { default: "Imam Hossain Rakib — Web Developer", template: "%s | Imam Hossain Rakib" },
  description: "The portfolio of Imam Hossain Rakib, a web developer in Dhaka, Bangladesh building thoughtful, useful digital experiences.",
  openGraph: { title: "Imam Hossain Rakib — Web Developer", description: "Thoughtful code. Useful experiences. Explore the projects and work of Imam Hossain Rakib.", type: "website" },
};

export default function RootLayout({ children }) {
  return <html lang="en" data-theme="night" className={`${geistSans.variable} ${geistMono.variable}`}><body className="min-w-[320px] bg-[#090e18] text-[#f1f5fa] antialiased" style={{ fontFamily: "var(--font-geist-sans), Arial, sans-serif" }}><SiteHeader />{children}<SiteFooter /></body></html>;
}
