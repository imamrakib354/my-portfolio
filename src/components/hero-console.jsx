"use client";

import { useState } from "react";
import { handleTabKeyDown } from "@/lib/tab-navigation";

const commands = [
  { label: "whoami", content: <><span className="text-[#c7ff76]">name:</span> &quot;Imam Hossain Rakib&quot;<br /><span className="text-[#c7ff76]">role:</span> &quot;Web Developer&quot;<br /><span className="text-[#c7ff76]">based_in:</span> &quot;Dhaka, Bangladesh&quot;</> },
  { label: "toolkit", content: <><span className="text-[#c7ff76]">frontend:</span> [&quot;React&quot;, &quot;Next.js&quot;, &quot;Tailwind&quot;]<br /><span className="text-[#c7ff76]">backend:</span> [&quot;Node.js&quot;, &quot;Express&quot;]<br /><span className="text-[#c7ff76]">database:</span> &quot;MongoDB&quot;</> },
  { label: "projects", content: <><span className="text-[#c7ff76]">shipped:</span> 3 projects<br /><span className="text-[#c7ff76]">latest:</span> &quot;Bazar Dor&quot;, &quot;FitLog&quot;,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&quot;Movie Explorer&quot;</> },
];

export default function HeroConsole() {
  const [active, setActive] = useState(0);

  return <div className="overflow-hidden rounded-2xl border border-white/15 bg-[#0b101b] shadow-[0_25px_100px_#0008]">
    <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3"><span className="size-2.5 rounded-full bg-[#ff6d74]" /><span className="size-2.5 rounded-full bg-[#f9c65b]" /><span className="size-2.5 rounded-full bg-[#c7ff76]" /><span className="mx-auto pr-7 font-mono text-[10px] text-[#8999ae]">rakib / workspace</span></div>
    <div className="flex flex-wrap gap-1 border-b border-white/10 px-3 py-2" role="tablist" aria-label="Explore developer information">{commands.map((command, index) => <button key={command.label} id={`console-tab-${index}`} type="button" role="tab" tabIndex={active === index ? 0 : -1} aria-selected={active === index} aria-controls="console-panel" onClick={() => setActive(index)} onKeyDown={(event) => handleTabKeyDown(event, active, commands.length, setActive, "console-tab")} className={`rounded-md px-3 py-2 font-mono text-[10px] transition-colors sm:text-xs ${active === index ? "bg-[#c7ff76]/15 text-[#c7ff76]" : "text-[#8999ae] hover:bg-white/5 hover:text-white"}`}>./{command.label}</button>)}</div>
    <div id="console-panel" role="tabpanel" aria-labelledby={`console-tab-${active}`} className="min-h-32 px-5 py-5 font-mono text-[11px] leading-7 text-[#c0cde0] sm:text-xs" aria-live="polite"><span className="text-[#6b86b2]">$</span> ./rakib --{commands[active].label}<br />{commands[active].content}<span className="ml-1 inline-block h-4 w-1.5 animate-pulse bg-[#c7ff76] align-middle motion-reduce:animate-none" aria-hidden="true" /></div>
  </div>;
}
