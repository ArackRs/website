/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: '#27ceb0', // Tonalidad principal
          soft: '#5ee7c7',   // Opción más clara
          mute: '#1a927c',    // Opción más oscura
          light: '#5ee7c7',   // Opción más clara
          dark: '#1a927c',    // Opción más oscura
        },
      },
    },
  },
  plugins: [],
}

