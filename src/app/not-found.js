import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { container, eyebrow, pageTitle, italic, lead, primaryButton } from "@/lib/styles";

export default function NotFound() {
  return <main className={`${container} flex min-h-[65vh] flex-col items-start justify-center py-20`}><p className={eyebrow}>404 / NOT FOUND</p><h1 className={pageTitle}>Looks like we took<br /><em className={italic}>a wrong turn.</em></h1><p className={`${lead} mt-7`}>That page isn&apos;t here. The good news? There&apos;s plenty more to explore.</p><Link href="/" className={`${primaryButton} mt-8`}>Back to home <ArrowIcon width={18} height={18} /></Link></main>;
}
