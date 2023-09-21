/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightseagreen: "#1aaea5",
        "gray-white": "#fff",
        "primary-50": "#edeff6",
        gray1: {
          "100": "#fefefe",
          "200": "#0e0e0e",
          "300": "rgba(0, 0, 0, 0.5)",
        },
        black: "#000",
        "primary-500": "#4a60a1",
        gainsboro: {
          "100": "rgba(226, 226, 226, 0.9)",
          "200": "rgba(226, 226, 226, 0.1)",
        },
        "gray-700": "#363a3d",
        "gray-50": "#e7e9eb",
        skyblue: "#83e1ff",
        mediumblue: "#0646e9",
        slategray: "#576074",
        darkslategray: "#434343",
        "gray-400": "#889099",
        "primary-800": "#1e2640",
        whitesmoke: {
          "100": "#ebebeb",
          "200": "#eaeaea",
        },
        royalblue: "#006be9",
        dodgerblue: "#5780e8",
        mediumslateblue: "rgba(7, 71, 232, 0.74)",
        darkturquoise: "#00dfdf",
        maroon: "#7d0000",
      },
      spacing: {},
      fontFamily: {
        "body-regular-400": "'Public Sans'",
        "body-regular-600": "Inter",
        roboto: "Roboto",
        poppins: "Poppins",
      },
      borderRadius: {
        "10xs": "3px",
        "3xs": "10px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      sm: "14px",
      "sm-6": "13.6px",
      xl: "20px",
      "21xl": "40px",
      "33xl": "52px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
