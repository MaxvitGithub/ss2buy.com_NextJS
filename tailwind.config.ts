import type { Config } from "tailwindcss";

export default {
  content: [  
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    
    extend: {
      fontFamily: {
      sans: ['Prompt', 'ui-sans-serif', 'system-ui'],
    },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  
  plugins: [],
} satisfies Config;
