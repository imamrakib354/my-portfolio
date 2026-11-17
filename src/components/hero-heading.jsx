const lines = [
  { text: "Thoughtful", className: "" },
  { text: "interfaces.", className: "" },
  { text: "Full-stack", className: "text-[#c7ff76]" },
  { text: "experiences.", className: "font-serif font-normal italic text-[#aebeff]" },
];

export default function HeroHeading() {
  return (
    <h1 id="hero-title" className="max-w-3xl text-[clamp(3rem,5.5vw,5.8rem)] font-semibold leading-[1.08] tracking-[-0.075em]">
      {lines.map((line, index) => (
        <span key={line.text} className="block overflow-hidden -mb-[.14em] pb-[.14em] pr-[.12em]">
          <span className={`hero-heading-line block ${line.className}`} style={{ "--line-index": index }}>{line.text}{index < lines.length - 1 ? " " : ""}</span>
        </span>
      ))}
    </h1>
  );
}
