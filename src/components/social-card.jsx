export default function SocialCard({ project }) {
  return (
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "62px 70px", color: "#f1f5fa", background: "#090e18", fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 22, color: "#a8b7cd" }}>
        <span style={{ color: "#c7ff76", fontWeight: 700, fontSize: 32 }}>ir.</span>
        <span>{project ? "PROJECT CASE STUDY" : "FULL-STACK DEVELOPER / DHAKA"}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", color: "#c7ff76", fontSize: 22, marginBottom: 20 }}>{project ? project.discipline.toUpperCase() : "IMAM HOSSAIN RAKIB"}</div>
        <div style={{ display: "flex", fontSize: project ? 88 : 76, fontWeight: 700, letterSpacing: "-4px", lineHeight: 1.12 }}>{project ? project.name : "Thoughtful interfaces."}</div>
        {!project && <div style={{ display: "flex", fontSize: 76, fontWeight: 700, letterSpacing: "-4px", color: "#aebeff", lineHeight: 1.12 }}>Full-stack experiences.</div>}
        {project && <div style={{ display: "flex", maxWidth: 960, fontSize: 28, lineHeight: 1.5, color: "#a8b7cd", marginTop: 24 }}>{project.summary}</div>}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", borderTop: "1px solid #ffffff25", paddingTop: 24, fontSize: 20, color: "#a8b7cd" }}>
        <span>{project ? "IMAM HOSSAIN RAKIB" : "NEXT.JS / TYPESCRIPT / EXPRESS / MONGODB"}</span>
        <span style={{ color: "#c7ff76" }}>{project ? "THE INTERFACE. THE SYSTEM. THE THINKING." : "PORTFOLIO"}</span>
      </div>
    </div>
  );
}
