/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        "P-title-primary": "var(--title-primary)",

        "P-subtitle-primary": "var(--subtitle-primary)",

        "P-text-primary": "var(--text-primary)",
        "P-text-secondary": "var(--text-secondary)",

        "P-background-primary": "var(--background-primary)",
        "P-background-secondary": "var(--background-secondary)",
        "P-background-tertiary": "var(--background-tertiary)",
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};

