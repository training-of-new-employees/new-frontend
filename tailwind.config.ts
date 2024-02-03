import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Rubik', 'Arial', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
export default config;
