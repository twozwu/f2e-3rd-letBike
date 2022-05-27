module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {
        //自訂顏色
        primary: {
          light: "#33373a", //primary-light，例如:bg-primary-light
          DEFAULT: "#172532", //primayr
          dark: "#08111A", //primary-dark
        },
        secondary: {
          light: "#",
          DEFAULT: "#5284B1",
          dark: "#31506C",
        },
        accent: {
          light: "#FEAD00",
          DEFAULT: "#F07E3F",
        },
      },
    },
  },
  plugins: [],
};
