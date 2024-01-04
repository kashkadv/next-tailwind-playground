module.exports = {
  content: ["./app/**/*.{js, jsx}", "./components/**/*.{js, jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        secondary: "var(--secondary-font)",
        subtitle: "var(--subtitle-font)",
      },
      colors: {
        woodGreen: "#4b654a",
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
        bounceUp: {
          "0%, 100%": { transform: "translateY(0)" },
          "30%": { transform: "translateY(-4px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out",
        fadeOut: "fadeOut 0.5s ease-in-out",
        slideInLeft: "slideInLeft 0.5s ease-in-out",
        slideOutRight: "slideOutRight 0.5s ease-in-out",
        bounceUp: "bounceUp 0.5s ease-in-out",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
