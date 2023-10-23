import { type Config } from "tailwindcss"
import { nextui } from "@nextui-org/react"


export default {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-back': "url('/bg.jpg')",
      },
      random: 'text-red-500'
    },
    colors: {
      'random': '#000000',
    }
  },
  darkMode: "class",
  plugins: [
    require("flowbite/plugin"),
    nextui()
  ],
} satisfies Config;
