module.exports = {
  mode: "jit",
  purge: ["./public/**/*.{html.js}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('./public/assets/bg.jpg')",
        "service-assurance": "url('./public/assets/assurance.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
