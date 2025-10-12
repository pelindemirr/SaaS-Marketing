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
        // Background colors
        primary: 'var(--bg-primary)',
        secondary: 'var(--bg-secondary)',
        card: 'var(--bg-card)',
        
        // Text colors
        'text-primary': 'var(--text-primary)',
        'text-secondary': 'var(--text-secondary)',
        
        // Accent colors
        accent: {
          DEFAULT: 'var(--accent-primary)',
          hover: 'var(--accent-hover)',
        },
        
        // Border colors
        'border-primary': 'var(--border-primary)',
        
        // Status colors
        success: 'var(--status-success)',
        warning: 'var(--status-warning)',
        error: 'var(--status-error)',
      },
      backgroundColor: {
        // Background utilities
        'bg-primary': 'var(--bg-primary)',
        'bg-secondary': 'var(--bg-secondary)',
        'bg-card': 'var(--bg-card)',
      },
      textColor: {
        // Text utilities  
        'primary': 'var(--text-primary)',
        'secondary': 'var(--text-secondary)',
        'accent': 'var(--accent-primary)',
      },
      borderColor: {
        // Border utilities
        'primary': 'var(--border-primary)',
        'accent': 'var(--accent-primary)',
      }
    },
  },
  plugins: [],
  darkMode: 'class', // Bu önemli - class based dark mode
};

export default config;