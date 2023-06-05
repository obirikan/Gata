/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: "'Inter', sans-serif",
      },
      colors: {
        cardHoverBg: "#F5F6F8",
        heroBg: "#F6F7F9",
        appBlack: "#121212",
        appSecondaryBg: "#001D3D",
        appBlue: "#1D68CE",
        appSecondaryText: "#414141",
        appGreen: "#2FBF71",
        appGray: "#F6F7F9",
        appGold: "#FCBF49",
        appBlue: "#1D68CE",
        appBorder: "#D0D0D0",
        appTertiary: "#00142B",
      },
      lineHeight: {
        150: "150%",
      },
      backgroundImage: {
        "gradient-bg": "linear-gradient(95.83deg, #1753A5 0%, #1753A5 96.36%)",
        'hover-gradient-bg': "linear-gradient(95.83deg, #1753A5 0%, #C23928 96.36%)"
      },
      boxShadow: {
        "industry-card":
          "0px 0px 4px rgba(0, 0, 0, 0.04), 0px 8px 16px rgba(0, 0, 0, 0.06)",
      },
      borderColor: {
        appBorder: "#D0D0D0",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
