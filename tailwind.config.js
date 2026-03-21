/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        secondary: "var(--secondary-color)",
        accent: "var(--accent-color)",
        text: "var(--text-color)",
        bg: "var(--bg-color)",
      },
      fontFamily: {
        heading: ['var(--font-heading)'],
        subheading: ['var(--font-subheading)'],
        body: ['var(--font-body)'],
        script: ['var(--font-script)'],
        accent: ['var(--font-accent)'],
      }
    },
  },
  plugins: [],
}