import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-inter)',
        mono: 'var(--font-space-grotesk)',
      },
      colors: {
        background: '#030303',
        foreground: '#ededed',
      },
    },
  },
  plugins: [],
};

export default config;
