module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        logo: "logo 1.5s linear",
      },
      keyframes: {
        logo: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "30%": {
            transform: "rotate(90deg)",
          },
          "70%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
