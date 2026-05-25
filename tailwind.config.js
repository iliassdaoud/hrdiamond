/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        night: "#07142E",
        ink: "#10203F",
        mist: "#F5F7FA",
        platinum: "#E7ECF3",
        gold: "#C8A24A",
        cyan: "#22D3EE",
      },
      boxShadow: {
        premium: "0 24px 80px rgba(7, 20, 46, 0.16)",
        glow: "0 18px 60px rgba(34, 211, 238, 0.22)",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Manrope", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
