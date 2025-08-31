/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'hsl(271, 76%, 53%)',
          50: 'hsl(271, 76%, 95%)',
          100: 'hsl(271, 76%, 90%)',
          200: 'hsl(271, 76%, 80%)',
          300: 'hsl(271, 76%, 70%)',
          400: 'hsl(271, 76%, 60%)',
          500: 'hsl(271, 76%, 53%)',
          600: 'hsl(271, 76%, 45%)',
          700: 'hsl(271, 76%, 35%)',
          800: 'hsl(271, 76%, 25%)',
          900: 'hsl(271, 76%, 15%)',
          foreground: 'hsl(0, 0%, 100%)',
        },
        secondary: {
          DEFAULT: 'hsl(189, 94%, 43%)',
          50: 'hsl(189, 94%, 95%)',
          100: 'hsl(189, 94%, 90%)',
          200: 'hsl(189, 94%, 80%)',
          300: 'hsl(189, 94%, 70%)',
          400: 'hsl(189, 94%, 60%)',
          500: 'hsl(189, 94%, 43%)',
          600: 'hsl(189, 94%, 35%)',
          700: 'hsl(189, 94%, 25%)',
          800: 'hsl(189, 94%, 15%)',
          900: 'hsl(189, 94%, 10%)',
          foreground: 'hsl(0, 0%, 100%)',
        },
        accent: {
          DEFAULT: 'hsl(326, 78%, 56%)',
          50: 'hsl(326, 78%, 95%)',
          100: 'hsl(326, 78%, 90%)',
          200: 'hsl(326, 78%, 80%)',
          300: 'hsl(326, 78%, 70%)',
          400: 'hsl(326, 78%, 60%)',
          500: 'hsl(326, 78%, 56%)',
          600: 'hsl(326, 78%, 45%)',
          700: 'hsl(326, 78%, 35%)',
          800: 'hsl(326, 78%, 25%)',
          900: 'hsl(326, 78%, 15%)',
          foreground: 'hsl(0, 0%, 100%)',
        },
        warning: {
          DEFAULT: 'hsl(45, 93%, 47%)',
          50: 'hsl(45, 93%, 95%)',
          100: 'hsl(45, 93%, 90%)',
          200: 'hsl(45, 93%, 80%)',
          300: 'hsl(45, 93%, 70%)',
          400: 'hsl(45, 93%, 60%)',
          500: 'hsl(45, 93%, 47%)',
          600: 'hsl(45, 93%, 40%)',
          700: 'hsl(45, 93%, 30%)',
          800: 'hsl(45, 93%, 20%)',
          900: 'hsl(45, 93%, 10%)',
          foreground: 'hsl(0, 0%, 0%)',
        },
        success: {
          DEFAULT: 'hsl(142, 71%, 45%)',
          50: 'hsl(142, 71%, 95%)',
          100: 'hsl(142, 71%, 90%)',
          200: 'hsl(142, 71%, 80%)',
          300: 'hsl(142, 71%, 70%)',
          400: 'hsl(142, 71%, 60%)',
          500: 'hsl(142, 71%, 45%)',
          600: 'hsl(142, 71%, 35%)',
          700: 'hsl(142, 71%, 25%)',
          800: 'hsl(142, 71%, 15%)',
          900: 'hsl(142, 71%, 10%)',
          foreground: 'hsl(0, 0%, 100%)',
        },
        background: 'hsl(0, 0%, 100%)',
        foreground: 'hsl(222.2, 84%, 4.9%)',
        muted: {
          DEFAULT: 'hsl(210, 40%, 96%)',
          foreground: 'hsl(215.4, 16.3%, 46.9%)',
        },
        border: 'hsl(214.3, 31.8%, 91.4%)',
        input: 'hsl(214.3, 31.8%, 91.4%)',
        ring: 'hsl(271, 76%, 53%)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, hsl(271, 76%, 53%) 0%, hsl(189, 94%, 43%) 100%)',
        'gradient-secondary': 'linear-gradient(135deg, hsl(326, 78%, 56%) 0%, hsl(45, 93%, 47%) 100%)',
        'gradient-hero': 'linear-gradient(135deg, hsl(271, 76%, 53%) 0%, hsl(189, 94%, 43%) 50%, hsl(326, 78%, 56%) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      animation: {
        'bounce-gentle': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 6s ease infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
    },
  },
  plugins: [],
}