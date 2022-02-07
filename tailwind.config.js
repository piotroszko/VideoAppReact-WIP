module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        logo: "logo 1.5s linear",
        slideBottom: "slideBottom 1.5s cubic-bezier(0.785, 0.135, 0.150, 0.860) both",
        slideTop: "slideTop 1.4s cubic-bezier(0.785, 0.135, 0.150, 0.860) both",
        scaleIn: "scaleIn 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) 0.7s both",
        scaleOut: "scaleOut 0.7s cubic-bezier(0.550, 0.085, 0.680, 0.530) both",
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
        slideBottom: {
          "0%": {
            transform: "translateY(-300px)",
            opacity: "0",
            height: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
            height: "16rem",
          },
        },
        slideTop: {
          "0%": {
            transform: "translateY(0)",
            opacity: "1",
            height: "16rem",
          },
          to: {
            transform: "translateY(-300px)",
            opacity: "0",
            height: "0",
          },
        },
        scaleIn: {
          "0%": {
            transform: "rotateX(-70deg)",
            opacity: "0",
          },
          to: {
            transform: "rotateX(0)",
            opacity: "1",
          },
        },
        scaleOut: {
          "0%": {
            transform: "rotateX(0)",
            opacity: "1",
          },
          to: {
            transform: "rotateX(-70deg)",
            opacity: "0",
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
