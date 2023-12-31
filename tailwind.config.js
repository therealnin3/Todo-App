/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FB3663",
        text: "#AAAAAA",
        sectext: "#5F5F5F",
        background: "#171717",
        secbackground: "#222222",
      },
    },
  },
  plugins: [require("tailwind-scrollbar"), require("autoprefixer")],
  variants: {
    scrollbar: ["rounded"],
  },
};
