import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        backgroundColor: "#0F0D11",
        selectedColor: "#18171B",
        workColor: "#814AD6",
      },
    },
  },
  plugins: [],
} satisfies Config;
