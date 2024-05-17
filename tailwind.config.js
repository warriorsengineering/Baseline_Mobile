/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/components/*.{js,jsx,ts,tsx}",
    "./src/screens/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        muted: 'rgba(var(--color-muted), .30)',
        warriors: {
          blue: 'rgb(var(--color-warriors-royal-blue) / <alpha-value>)',
          yellow: 'rgb(var(--color-warriors-california-golden-yellow) / <alpha-value>)',
        },
        valkyries: {
          violet: 'rgb(var(--color-valkyries-violet) / <alpha-value>)',
        },
        chasecenter: {
          blue: 'rgb(var(--color-chasecenter-core-blue) / <alpha-value>)',
        },
      }
    },
  },
  plugins: [],
}