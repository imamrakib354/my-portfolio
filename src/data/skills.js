export const skillGroups = [
  {
    title: "Frontend",
    label: "THE PART PEOPLE EXPERIENCE",
    description: "Responsive interfaces, reusable components, and state that stays in sync across an application.",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML & CSS", "Tailwind CSS"],
    evidence: [
      { project: "mentor-lagbe", name: "MentorLagbe", text: "Built tuition discovery, pricing, and role-specific dashboards with Next.js and TypeScript." },
      { project: "book-nook", name: "Book Nook", text: "Created a book catalog, borrowing views, and responsive reader dashboards." },
      { project: "bazar-dor", name: "Bazar Dor", text: "Built Bengali-first layouts with localized numbers and interactive price sorting." },
      { project: "fitlog", name: "FitLog", text: "Connected the exercise library, detail pages, and plan dashboard through shared React state." },
      { project: "movie-explorer", name: "Movie Explorer", text: "Built a searchable show catalog with a cinematic interface and details modal." },
    ],
  },
  {
    title: "Backend & data",
    label: "THE SYSTEMS BEHIND THE SCREEN",
    description: "APIs and database operations that connect interface actions to real application behavior.",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "CRUD operations"],
    evidence: [
      { project: "mentor-lagbe", name: "MentorLagbe", text: "Connected role-based marketplace workflows to an Express API and verified Stripe Checkout payments on the server." },
      { project: "book-nook", name: "Book Nook", text: "Built book-management and borrowing endpoints in Express, backed by MongoDB collections." },
    ],
  },
  {
    title: "Authentication",
    label: "IDENTITY, ACCESS & OWNERSHIP",
    description: "Learning to separate who a user is from what that user is allowed to read or change.",
    skills: ["Better Auth", "JWT", "JWKS / jose", "OAuth integration", "Protected routes", "Ownership checks"],
    evidence: [
      { project: "mentor-lagbe", name: "MentorLagbe", text: "Used Better Auth for sign-in and role-specific marketplace access." },
      { project: "book-nook", name: "Book Nook", text: "Verified bearer JWTs using JWKS, issuer, and audience checks; scoped book mutations to the owner." },
    ],
  },
  {
    title: "Tools & workflow",
    label: "FROM LOCAL DEVELOPMENT TO LIVE",
    description: "Version control, deployment, and an iterative approach: build it, understand it, improve it.",
    skills: ["Git", "GitHub", "Vercel", "Browser DevTools"],
    evidence: [
      { project: "mentor-lagbe", name: "MentorLagbe", text: "Maintained separate client and server repositories and deployed the marketplace frontend." },
      { project: "book-nook", name: "Book Nook", text: "Maintained separate frontend and backend repositories and connected their Vercel deployments." },
      { project: "bazar-dor", name: "Bazar Dor", text: "Shared the application on GitHub and deployed the market-price guide to Vercel." },
      { project: "fitlog", name: "FitLog", text: "Shared the workout planner on GitHub and deployed it to Vercel." },
      { project: "movie-explorer", name: "Movie Explorer", text: "Published the frontend on GitHub and deployed the movie discovery experience to Vercel." },
    ],
  },
];
