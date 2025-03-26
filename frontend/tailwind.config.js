/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",  // Make sure Tailwind can purge unused styles from your HTML
      "./src/**/*.{js,jsx,ts,tsx}"  // Tailwind will process all JS and JSX files in your src folder
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };
  