import Reveal from "./reveal";

export default function TechnicalDecisions({ decisions }) {
  return (
    <div className="divide-y divide-white/10 border-y border-white/10">
      {decisions.map((decision, index) => (
        <Reveal key={decision.title} className="grid gap-6 py-9 md:grid-cols-[.8fr_1.2fr] md:gap-14">
          <div>
            <span className="font-mono text-[11px] text-[#c7ff76]">DECISION / {String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-4 max-w-sm text-2xl font-semibold tracking-tight sm:text-3xl">{decision.title}</h3>
          </div>
          <dl className="space-y-5 text-sm leading-7">
            {[["THE CHOICE", decision.choice], ["WHY IT MATTERS", decision.reason], ["THE TRADEOFF", decision.tradeoff]].map(([label, text]) => <div key={label}><dt className="font-mono text-[10px] tracking-wider text-[#aebeff]">{label}</dt><dd className="mt-1 text-[#a8b7cd]">{text}</dd></div>)}
          </dl>
        </Reveal>
      ))}
    </div>
  );
}
