import { type Config } from "tailwindcss";

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
      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
} satisfies Config;
