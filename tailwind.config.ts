import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        brand: {
          'azul-marinho': '#2A3B95',
          'roxo-escuro': '#5D2C9D',
          'azul-petroleo': '#2A3B95',
          'cinza-claro': '#B8B8B8',
          'branco': '#ffffff',
        },
        'estimulus': {
          primary: '#2A3B95',      // Azul Marinho
          secondary: '#5D2C9D',    // Roxo Escuro
          accent: '#2A3B95',        // Azul Marinho (substituído)
          gray: '#B8B8B8',          // Cinza Claro
          white: '#ffffff',          // Branco
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(to right, #2A3B95, #5D2C9D, #2A3B95)',
        'gradient-brand-horizontal': 'linear-gradient(to right, #2A3B95, #5D2C9D)',
        'gradient-brand-vertical': 'linear-gradient(to bottom, #2A3B95, #5D2C9D, #2A3B95)',
        'gradient-mesh': 'radial-gradient(at 0% 0%, rgba(42, 59, 149, 0.1) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(93, 44, 157, 0.1) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(42, 59, 149, 0.1) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(42, 59, 149, 0.1) 0px, transparent 50%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(42, 59, 149, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(42, 59, 149, 0.6)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
};
export default config;

