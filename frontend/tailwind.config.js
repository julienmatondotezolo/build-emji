const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Modern brand colors
        brand: {
          50: "#eff6ff",
          100: "#dbeafe", 
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6", // Primary brand
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        
        // Glassmorphism colors
        glass: {
          white: "rgba(255, 255, 255, 0.05)",
          black: "rgba(0, 0, 0, 0.05)",
          border: "rgba(255, 255, 255, 0.1)",
          backdrop: "rgba(255, 255, 255, 0.02)",
        },
        
        // Agent status colors
        agent: {
          idle: "#64748b",
          working: "#f59e0b",
          completed: "#10b981",
          failed: "#ef4444",
        },
        
        // Dark mode palette
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground))",
        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground))",
        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",
        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground))",
        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground))",
        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground))",
        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground))",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
      },
      
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
        mono: ["JetBrains Mono", ...fontFamily.mono],
      },
      
      animation: {
        // Custom animations
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.5s ease-out",
        "slide-up": "slideUp 0.3s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
        "shine": "shine 2s ease-in-out infinite",
        "gradient": "gradient 6s ease infinite",
        "float": "float 3s ease-in-out infinite",
      },
      
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        shine: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      
      backdropBlur: {
        xs: "2px",
      },
      
      boxShadow: {
        // Glassmorphism shadows
        glass: "0 8px 32px rgba(0, 0, 0, 0.1)",
        "glass-lg": "0 16px 64px rgba(0, 0, 0, 0.15)",
        "glass-xl": "0 24px 96px rgba(0, 0, 0, 0.2)",
        
        // Agent status shadows
        "agent-idle": "0 4px 12px rgba(100, 116, 139, 0.3)",
        "agent-working": "0 4px 12px rgba(245, 158, 11, 0.4)",
        "agent-completed": "0 4px 12px rgba(16, 185, 129, 0.4)",
        "agent-failed": "0 4px 12px rgba(239, 68, 68, 0.4)",
      },
      
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      
      spacing: {
        18: "4.5rem",
        88: "22rem",
        112: "28rem",
        128: "32rem",
      },
      
      screens: {
        xs: "475px",
        "3xl": "1920px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
};