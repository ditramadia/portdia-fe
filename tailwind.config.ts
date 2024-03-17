import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#030306',
        white: '#EEF1EC',
        white_dark: '#BCBEC5',
        white_darker: '#919399',
        grey: '#C4C4C4',
        tosca_main: '#5FF3D6',
        purple_main: '#7B46F3',
        blue_main: '#5392EA',
        blue_dark: '#4987DD',
        blue_darker: '#467CC8'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'blue-ellipse': "url('/images/blue-ellipse.png')",
      }
    },
    screens: {
      'md': '950px',
      'lg': '1100px'
    }
  },
  variants: {
    fill: ['hover', 'focus'],
  },
  plugins: [],
};
export default config;
