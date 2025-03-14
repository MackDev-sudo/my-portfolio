/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Base colors that work with dark mode modifiers
        primary: "#ffffff", // Light mode: White
        secondary: "#0ea5e9", // Light mode: Bright sky blue
        tertiary: "#f1f5f9", // Light mode: Light gray
        textPrimary: "#0f172a", // Light mode: Dark blue/gray
        textSecondary: "#475569", // Light mode: Medium gray

        // Theme-specific colors
        theme: {
          primary: {
            light: "#ffffff", // Light mode: White
            dark: "#111827", // Dark mode: Very dark gray (almost black)
          },
          secondary: {
            light: "#0ea5e9", // Light mode: Bright sky blue
            dark: "#60a5fa", // Dark mode: Bright blue
          },
          tertiary: {
            light: "#f1f5f9", // Light mode: Light gray
            dark: "#1f2937", // Dark mode: Dark gray
          },
          text: {
            primary: {
              light: "#0f172a", // Light mode: Dark blue/gray
              dark: "#f3f4f6", // Dark mode: Very light gray
            },
            secondary: {
              light: "#475569", // Light mode: Medium gray
              dark: "#9ca3af", // Dark mode: Medium gray
            },
          },
          bg: {
            primary: {
              light: "#ffffff", // Light mode: White
              dark: "#111827", // Dark mode: Very dark gray (almost black)
            },
            secondary: {
              light: "#f8fafc", // Light mode: Very light gray
              dark: "#1f2937", // Dark mode: Dark gray
            },
          },
          accent: {
            primary: {
              light: "#0ea5e9", // Light mode: Sky blue
              dark: "#60a5fa", // Dark mode: Bright blue
            },
            secondary: {
              light: "#f1f5f9", // Light mode: Light gray
              dark: "#374151", // Dark mode: Slate gray
            },
          },
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
