
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        suse: ['SUSE', 'sans-serif'],
      },

      screens: {
        'sm': '640px',
        'max-sm': { 'max': '639px' },
      },
      textOverflow: {
        ellipsis: 'ellipsis',
        clip: 'clip',
      },

      breakAll: {
        wordBreak: 'break-all',
      }
    },
  },
  plugins: [],
};

export default config;
