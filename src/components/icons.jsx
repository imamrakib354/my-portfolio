const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export function ArrowIcon({ diagonal = false, ...props }) {
  return diagonal ? (
    <svg {...base} {...props}><path d="M5 19 19 5M8 5h11v11" /></svg>
  ) : (
    <svg {...base} {...props}><path d="M4 12h16m-7-7 7 7-7 7" /></svg>
  );
}

export function GithubIcon(props) {
  return <svg {...base} {...props}><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.4a3 3 0 0 0-.8-2.3c2.7-.3 5.5-1.3 5.5-6.1a4.8 4.8 0 0 0-1.3-3.3 4.5 4.5 0 0 0-.1-3.3S17.2 3.3 15 5a12.3 12.3 0 0 0-6 0C6.8 3.3 5.7 3.6 5.7 3.6a4.5 4.5 0 0 0-.1 3.3 4.8 4.8 0 0 0-1.3 3.3c0 4.8 2.8 5.8 5.5 6.1a3 3 0 0 0-.8 2.3V22" /></svg>;
}

export function LinkedinIcon(props) {
  return <svg {...base} {...props}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 10v7m0-10v.01M11 17v-7m0 3a3 3 0 0 1 6 0v4" /></svg>;
}

export function MailIcon(props) {
  return <svg {...base} {...props}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m2 6 10 7 10-7" /></svg>;
}

export function MenuIcon(props) {
  return <svg {...base} {...props}><path d="M4 7h16M4 12h16M4 17h16" /></svg>;
}

export function CloseIcon(props) {
  return <svg {...base} {...props}><path d="M5 5 19 19M19 5 5 19" /></svg>;
}
