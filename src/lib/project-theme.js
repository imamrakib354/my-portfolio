const themes = {
  blue: { background: "#172b4d", accent: "#a9c8ff", glow: "#2454a6" },
  emerald: { background: "#102c25", accent: "#b3dfbe", glow: "#235a43" },
  green: { background: "#172b26", accent: "#b9dec7", glow: "#315a44" },
  lime: { background: "#252d1d", accent: "#c7ff76", glow: "#4a5830" },
  violet: { background: "#251b3d", accent: "#c5b8ff", glow: "#49346b" },
};

export function projectTheme(accent) {
  const theme = themes[accent] || themes.violet;
  return {
    "--project-bg": theme.background,
    "--project-accent": theme.accent,
    "--project-glow": theme.glow,
  };
}
