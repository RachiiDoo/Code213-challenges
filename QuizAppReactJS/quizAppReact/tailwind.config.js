/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        containerColor: "#202942",
        borderButtonColor: "#1F3D5A",
      },
    },
  },
  plugins: [],
};
