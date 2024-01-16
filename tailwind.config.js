/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "5rem",
        "2xl": "0",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      colors: {
        primary: {
          500: "hsla(108, 16%, 39%, 1)",
          250: "hsla(108, 16%, 39%, .1)",
        },
        secondary: {
          500: "hsla(267, 54%, 45%, 1)",
        },
        background: "hsla(15, 67%, 98%, 1)",
        btn: "hsla(15, 67%, 98%, 1)",
        body: "hsla(251, 8%, 27%, 1)",
        heading: "hsla(137, 52%, 11%, 1)",
        body: "hsla(251, 8%, 27%, 1)",
      },
      fontSize: {
        xs: [
          "0.75rem",
          {
            lineHeight: "1.125rem",
            fontWeight: 700,
          },
        ],
        sm: [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            fontWeight: 400,
          },
        ],
        base: [
          "1rem",
          {
            lineHeight: "1.5rem",
            fontWeight: 400,
          },
        ],
        lg: [
          "1.125rem",
          {
            lineHeight: "1.75rem",
            fontWeight: 700,
          },
        ],
        xl: [
          "1.25rem",
          {
            lineHeight: "1.75rem",
            fontWeight: 700,
          },
        ],
        "2xl": [
          "1.5rem",
          {
            lineHeight: "2rem",
            fontWeight: 700,
          },
        ],
        "3xl": [
          "1.875rem",
          {
            lineHeight: "2.25rem",
            fontWeight: 700,
          },
        ],
        "4xl": [
          "2.25rem",
          {
            lineHeight: "2.5rem",
            fontWeight: 700,
          },
        ],
        "5xl": [
          "3rem",
          {
            fontWeight: 700,
          },
        ],
        "6xl": [
          "3.5rem",
          {
            lineHeight: "3.625rem",
            fontWeight: 700,
          },
        ],
        "7xl": [
          "4.5rem",
          {
            lineHeight: "0.0625rem",
            fontWeight: 700,
          },
        ],
        "text-btn": [
          "0.8125rem",
          {
            lineHeight: "normal",
            letterSpacing: "0.0625rem",
          },
        ],
      },
      screens: {
        320: "320px",
        388: "388px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
