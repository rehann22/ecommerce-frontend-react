export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    require("daisyui"),
    require("@tailwindcss/line-clamp")
  ],
  daisyui: {
    themes: ["light"], // hanya light mode
  },
};
