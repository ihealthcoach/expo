/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
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
    },
  },
  plugins: [],
};

