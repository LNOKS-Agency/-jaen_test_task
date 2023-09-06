/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "primary": "var(--primary)",
      "secondary": "var(--secondary)",
      "secondary-focus": "var(--secondary-focus)",
      "secondary-content": "var(--secondary-content)",
      "accent": "var(--accent)",
      "neutral": "var(--neutral)",
      "base-100": "var(--base-100)",
      "base-200": "var(--base-200)",
      "base-300": "var(--base-300)",
      "base-content": "var(--base-content)",
      "info": "var(--info)",
      "success": "var(--success)",
      "warning": "var(--warning)",
      "error": "var(--error)"
    },
    extend: {},
  },
  plugins: [],
}

