module.exports = {
  content: ["./app/**/*.{js, jsx}", "./components/**/*.{js, jsx}"],
  darkMode: "class",
  theme: {
    fontSize: {
      h1: ["14px", {}],
      "h1-md": ["24px", {}],
      "h1-xl": ["36px", {}],
    },
    extend: {
      colors: {
        shtyl: "rgba(0,0,0,.4)",
      },
      keyframes: {
        slideInLeft: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOutRight: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(100%)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: "100%" },
        },
        fadeOut: {
          "0%": { opacity: "100%" },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeOut: "fadeOut 0.5s ease-in-out",
        slideInLeft: "slideInLeft 0.5s ease-in-out",
        slideOutRight: "slideOutRight 0.5s ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
