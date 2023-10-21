/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        interBlack: ['Inter-Black'],
        interBold: ['Inter-Bold'],
        interExtraBold: ['Inter-ExtraBold'],
        interExtraLight: ['Inter-ExtraLight'],
        interLight: ['Inter-Light'],
        interMedium: ['Inter-Medium'],
        interRegular: ['Inter-Regular'],
        interSemiBold: ['Inter-SemiBold'],
        interThin: ['Inter-Thin'],
      },
      colors: {
        "white-ih": "#FCFEFE",
        "black-ih": "#24292F",
        primary: {
          50: "#F0FDFC",
          100: "#CCFBF6",
          200: "#99F6EC",
          300: "#5EEADB",
          400: "#2DD4C2",
          500: "#14B8A6",
          600: "#0D9485",
          700: "#0F766B",
          800: "#115E56",
          900: "#134E48",
          950: "#042F2A",
        }
      },
      fontSize: {
        "text-xxs": "0.6875rem",
        "text-xxxs": "0.5625rem"
      },

    },
  },
  plugins: [],
};

