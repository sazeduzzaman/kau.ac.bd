module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "site-primary": "var(--site-primary)",
        "site-accent": "var(--site-accent)",
      },
    },
  },
  safelist: ["bg-site-primary", "hover:bg-site-accent", "text-site-primary"],
};
