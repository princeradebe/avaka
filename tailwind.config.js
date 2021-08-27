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
        "hero-pattern": "url('./assets/bg.jpg')",
        "service-assurance": "url('./assets/assurance.png')",
        "service-advisory": "url('./assets/advisory.png')",
        "service-audit": "url('./assets/audit.png')",
        "service-ict": "url('./assets/ict.png')",
        "service-consulting": "url('./assets/consulting.png')",
        "service-training": "url('./assets/training.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
