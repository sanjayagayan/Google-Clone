/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'sans-serif'],
      },
      boxShadow: {
        'custom-md': '0px 1.2px 5.5px 0px rgba(0, 0, 0, 0.18)',
        'custom-lg': '5px -3px 13px -4px rgba(0, 0, 0, 0.1), 5px 5px 5px -4px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
};


