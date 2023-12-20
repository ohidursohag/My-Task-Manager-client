/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#2a80d5',
        "secondary": "#00b894"
      },
    },
  },
  plugins: [],
}

