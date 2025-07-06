/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {},
    fontFamily: {
      CrimsonPro: ["Crimson Pro", "serif"],
      Pretendard: ["Pretendard Variable"],
      AlexBrush: ["Alex Brush", "cursive"],
      Italiana: ["Italiana", "serif"],
    },
    backgroundImage: {
      "fade-to-white": "linear-gradient(hsla(0, 0%, 100%, 0), #fff)",
    },
    keyframes: {
      blink: {
        "0%": {
          opacity: "1",
          transform: "rotate(180deg) translate3d(0,-2px,0)",
        },

        "50%": {
          opacity: ".2",
          transform: " rotate(180deg) translate3d(0,2px,0)",
        },

        "100%": {
          opacity: "1",
          transform: "rotate(180deg) translate3d(0,-2px,0)",
        },
      },
    },
    animation: {
      blink: "blink 1.3s infinite",
    },
  },
  plugins: [],
};
