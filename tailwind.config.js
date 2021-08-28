module.exports = {
  mode: "jit",
  purge: [
    "./public/**/*.html",
    // "./public/services/**/*.html",
    "./public/index.html",
    // "./public/ict.html",
  ],
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
        "service-risk": "url('./assets/risk.png')",
        "service-asset": "url('./assets/asset.png')",
        "service-accounting": "url('./assets/accounting.png')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
