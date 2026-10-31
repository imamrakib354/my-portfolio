"use client";

import { useState } from "react";

export default function CopyEmail({ email }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return <button type="button" className="btn btn-ghost mt-4 -ml-3 rounded-full font-mono text-xs text-[#9caac2] hover:bg-white/10 hover:text-[#c7ff76]" onClick={copy} aria-live="polite">{copied ? "✓ Copied to clipboard" : "↗ Copy email address"}</button>;
}
