/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: "#d9d9d9", //gray
        dark: "#242830", //black
        light: "#FFFFFF",
        success: "#2DDA1E", // green
        warning: "#CCB330", // yellow
        failed: "#CC3030", // red
        swell: {
          10: "#367CFF", // blue
          30: "#3D2988", // purple
          60: "#F4EEE8", // dirty-white
          dark: "#0B061E", // very dark purple
          light: "#775DE0", // light purple
        },
        btn: {
          1: "#3D2988",
          2: "#367CFF",
          3: "#FFCA70",
        },
      },
    },
  },
  plugins: [],
};
