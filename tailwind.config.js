/** @type {import('tailwindcss').Config} */
import tailwindcss from "tailwindcss";
// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      placeholderColor: {
        primary: "#ACACAC", // 새로운 placeholder 색상 정의
        red: "red",
      },
    },
  },
  // plugins: [react(), vanillaExtractPlugin(), wyw()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
};
