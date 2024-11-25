import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'caslon': ['Adobe Caslon Pro', 'serif'],
        'cooper': ['Cooper Black', 'serif'],
        'gelica': ['Gelica', 'serif'],
        'ivy': ['IvyStyle Sans', 'sans-serif'],
      },
      colors: {
        cyan: {
          500: '#000000',
        },
        magenta: {
          500: '#000000',
        },
        yellow: {
          500: '#000000',
        },
        'custom-magenta': '#000000',
        'custom-yellow': '#000000',
        'custom-blue': '#5F584E',
        'custom-light-blue': '#000000',
        'custom-medium-blue': '#000000',
        'custom-bg': '#ffffff',
      },
    },
  },
  plugins: [],
};
export default config;
