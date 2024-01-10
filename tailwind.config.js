import { nextui } from "@nextui-org/react";
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/@nextui-org/theme/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {},
  },
  plugins: [nextui()],
}