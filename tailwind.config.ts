import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "image-mulher": "url('/image/mulheres.jpg')",
        "image-mulher-calc": "url('/image/mulhercalc.png')",
        "image-agro": "url('/image/bg_agro.jpg')",
        "image-mapa": "url('/image/mapa.svg')",
        "image-poligono": "url('/image/poligono.svg')",
      },
      colors: {
        primary: "#00FFC2",
      },
    },
  },
  plugins: [],
};
export default config;
