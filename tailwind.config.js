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
    },
  },
  plugins: [],
};
