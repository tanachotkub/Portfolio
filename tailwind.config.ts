import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
    fontFamily: {
    sans: ['Prompt', 'sans-serif'],
  },
      colors: { brand: { 50:"#eff6ff",100:"#dbeafe",200:"#bfdbfe",400:"#60a5fa",500:"#3b82f6",600:"#2563eb",700:"#1d4ed8",800:"#1e40af",900:"#1e3a8a" } },
      animation: { "fade-up":"fadeUp 0.6s ease forwards", float:"float 4s ease-in-out infinite", "blob-morph":"morphBlob 8s ease-in-out infinite" },
      keyframes: {
        fadeUp: { "0%":{opacity:"0",transform:"translateY(24px)"},"100%":{opacity:"1",transform:"translateY(0)"} },
        float: { "0%,100%":{transform:"translateY(0px)"},"50%":{transform:"translateY(-12px)"} },
        morphBlob: { "0%,100%":{borderRadius:"61% 39% 53% 47% / 45% 55% 45% 55%"},"33%":{borderRadius:"40% 60% 65% 35% / 55% 30% 70% 45%"},"66%":{borderRadius:"50% 50% 30% 70% / 40% 60% 40% 60%"} },
      },
    },
  },
  plugins: [],
};
export default config;
