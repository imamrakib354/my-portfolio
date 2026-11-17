export const skillGroups = [
  {
    title: "Frontend",
    label: "THE PART PEOPLE EXPERIENCE",
    description: "Responsive interfaces, reusable components, and state that stays in sync across an application.",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML & CSS", "Tailwind CSS"],
    evidence: [
      { project: "fitlog", name: "FitLog", text: "Connected the exercise library, detail pages, and plan dashboard through shared React state." },
      { project: "bazar-dor", name: "Bazar Dor", text: "Built Bengali-first layouts with localized numbers and interactive price sorting." },
    ],
  },
  {
    title: "Backend & data",
    label: "THE SYSTEMS BEHIND THE SCREEN",
    description: "APIs and database operations that connect interface actions to real application behavior.",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "CRUD operations"],
    evidence: [
      { project: "book-nook", name: "Book Nook", text: "Built book-management and borrowing endpoints in Express, backed by MongoDB collections." },
      { project: "bazar-dor", name: "Bazar Dor", text: "Integrated an external product API and derived market-price summaries from its data." },
    ],
  },
  {
    title: "Authentication",
    label: "IDENTITY, ACCESS & OWNERSHIP",
    description: "Learning to separate who a user is from what that user is allowed to read or change.",
    skills: ["Better Auth", "JWT", "JWKS / jose", "OAuth integration", "Protected routes", "Ownership checks"],
    evidence: [
      { project: "book-nook", name: "Book Nook", text: "Verified bearer JWTs using JWKS, issuer, and audience checks; scoped book mutations to the owner." },
      { project: "bazar-dor", name: "Bazar Dor", text: "Checked Better Auth sessions on the server before rendering protected product details." },
    ],
  },
  {
    title: "Tools & workflow",
    label: "FROM LOCAL DEVELOPMENT TO LIVE",
    description: "Version control, deployment, and an iterative approach: build it, understand it, improve it.",
    skills: ["Git", "GitHub", "Vercel", "Browser DevTools"],
    evidence: [
      { project: "book-nook", name: "Book Nook", text: "Maintained separate frontend and backend repositories and connected their Vercel deployments." },
      { project: "fitlog", name: "FitLog", text: "Used browser storage to retain plans between visits without requiring a server account." },
    ],
  },
];
