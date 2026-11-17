export default function ProjectFacts({ project }) {
  return (
    <dl className="grid gap-6 border-y border-white/10 py-7 sm:grid-cols-3">
      {[["MY CONTRIBUTION", project.role || "Interface development"], ["PROJECT TYPE", project.type], ["BUILT WITH", project.stack.slice(0, 3).join(" / ")]].map(([label, value]) => (
        <div key={label}><dt className="font-mono text-[10px] tracking-widest text-[#8191ac]">{label}</dt><dd className="mt-3 text-sm font-medium leading-6 text-white">{value}</dd></div>
      ))}
    </dl>
  );
}
