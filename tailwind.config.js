/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": '#3D60F8',
        "secondary": "#27AE60",
        "accent": "#FFA726",
        "black": "#131313",
        "base": "#F9F9F9",
        "warning": "#F2994A",
        "error": "#EB5757",
        "neutral": "#636E72",
      },
    },
  },
  plugins: [],
}

