/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html", "./src/**/*.jsx", "./src/**/*.js"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#121212",
        "secondary-bg": "#1E1E1E",
        "primary-text": "#F5F5F5",
        "secondary-text": "#BBBBBB",
        "accent-1": "#4682B4",
        "accent-2": "#D2691E",
      },
    },
  },
  // ...
};
