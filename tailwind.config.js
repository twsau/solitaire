/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        // backs
        "card-back-1": "url('/cards/backs/1.png')",
        "card-back-2": "url('/cards/backs/2.png')",
        "card-back-3": "url('/cards/backs/3.png')",
        "card-back-4": "url('/cards/backs/4.png')",
        "card-back-5": "url('/cards/backs/5.png')",
        "card-back-6": "url('/cards/backs/6.png')",
        "card-back-7": "url('/cards/backs/7.png')",
        "card-back-8": "url('/cards/backs/8.png')",
        // hearts
        "card-hearts-1": "url('/cards/hearts/1.png')",
        "card-hearts-2": "url('/cards/hearts/2.png')",
        "card-hearts-3": "url('/cards/hearts/3.png')",
        "card-hearts-4": "url('/cards/hearts/4.png')",
        "card-hearts-5": "url('/cards/hearts/5.png')",
        "card-hearts-6": "url('/cards/hearts/6.png')",
        "card-hearts-7": "url('/cards/hearts/7.png')",
        "card-hearts-8": "url('/cards/hearts/8.png')",
        "card-hearts-9": "url('/cards/hearts/9.png')",
        "card-hearts-10": "url('/cards/hearts/10.png')",
        "card-hearts-11": "url('/cards/hearts/11.png')",
        "card-hearts-12": "url('/cards/hearts/12.png')",
        "card-hearts-13": "url('/cards/hearts/13.png')",
        // diamonds
        "card-diamonds-1": "url('/cards/diamonds/1.png')",
        "card-diamonds-2": "url('/cards/diamonds/2.png')",
        "card-diamonds-3": "url('/cards/diamonds/3.png')",
        "card-diamonds-4": "url('/cards/diamonds/4.png')",
        "card-diamonds-5": "url('/cards/diamonds/5.png')",
        "card-diamonds-6": "url('/cards/diamonds/6.png')",
        "card-diamonds-7": "url('/cards/diamonds/7.png')",
        "card-diamonds-8": "url('/cards/diamonds/8.png')",
        "card-diamonds-9": "url('/cards/diamonds/9.png')",
        "card-diamonds-10": "url('/cards/diamonds/10.png')",
        "card-diamonds-11": "url('/cards/diamonds/11.png')",
        "card-diamonds-12": "url('/cards/diamonds/12.png')",
        "card-diamonds-13": "url('/cards/diamonds/13.png')",
        // clubs
        "card-clubs-1": "url('/cards/clubs/1.png')",
        "card-clubs-2": "url('/cards/clubs/2.png')",
        "card-clubs-3": "url('/cards/clubs/3.png')",
        "card-clubs-4": "url('/cards/clubs/4.png')",
        "card-clubs-5": "url('/cards/clubs/5.png')",
        "card-clubs-6": "url('/cards/clubs/6.png')",
        "card-clubs-7": "url('/cards/clubs/7.png')",
        "card-clubs-8": "url('/cards/clubs/8.png')",
        "card-clubs-9": "url('/cards/clubs/9.png')",
        "card-clubs-10": "url('/cards/clubs/10.png')",
        "card-clubs-11": "url('/cards/clubs/11.png')",
        "card-clubs-12": "url('/cards/clubs/12.png')",
        "card-clubs-13": "url('/cards/clubs/13.png')",
        // spades
        "card-spades-1": "url('/cards/spades/1.png')",
        "card-spades-2": "url('/cards/spades/2.png')",
        "card-spades-3": "url('/cards/spades/3.png')",
        "card-spades-4": "url('/cards/spades/4.png')",
        "card-spades-5": "url('/cards/spades/5.png')",
        "card-spades-6": "url('/cards/spades/6.png')",
        "card-spades-7": "url('/cards/spades/7.png')",
        "card-spades-8": "url('/cards/spades/8.png')",
        "card-spades-9": "url('/cards/spades/9.png')",
        "card-spades-10": "url('/cards/spades/10.png')",
        "card-spades-11": "url('/cards/spades/11.png')",
        "card-spades-12": "url('/cards/spades/12.png')",
        "card-spades-13": "url('/cards/spades/13.png')",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        grabbed: {
          from: {
            opacity: 0,
            transform: "translateY(-60%) rotate(0deg)",
          },
          to: {
            transform: "translateY(-50%) rotate(12deg) scale(0.75)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        grabbed: "grabbed 0.2s ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
