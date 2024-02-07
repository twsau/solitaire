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
        "card-back-1": "url('/Cards/Backs/back_0.png')",
        "card-back-2": "url('/Cards/Backs/back_1.png')",
        "card-back-3": "url('/Cards/Backs/back_2.png')",
        "card-back-4": "url('/Cards/Backs/back_3.png')",
        "card-back-5": "url('/Cards/Backs/back_4.png')",
        "card-back-6": "url('/Cards/Backs/back_5.png')",
        "card-back-7": "url('/Cards/Backs/back_6.png')",
        "card-back-8": "url('/Cards/Backs/back_7.png')",
        // hearts
        "card-hearts-1": "url('/Cards/Hearts/Hearts_card_01.png')",
        "card-hearts-2": "url('/Cards/Hearts/Hearts_card_02.png')",
        "card-hearts-3": "url('/Cards/Hearts/Hearts_card_03.png')",
        "card-hearts-4": "url('/Cards/Hearts/Hearts_card_04.png')",
        "card-hearts-5": "url('/Cards/Hearts/Hearts_card_05.png')",
        "card-hearts-6": "url('/Cards/Hearts/Hearts_card_06.png')",
        "card-hearts-7": "url('/Cards/Hearts/Hearts_card_07.png')",
        "card-hearts-8": "url('/Cards/Hearts/Hearts_card_08.png')",
        "card-hearts-9": "url('/Cards/Hearts/Hearts_card_09.png')",
        "card-hearts-10": "url('/Cards/Hearts/Hearts_card_10.png')",
        "card-hearts-11": "url('/Cards/Hearts/Hearts_card_11.png')",
        "card-hearts-12": "url('/Cards/Hearts/Hearts_card_12.png')",
        "card-hearts-13": "url('/Cards/Hearts/Hearts_card_13.png')",
        // diamonds
        "card-diamonds-1": "url('/Cards/Diamonds/Diamonds_card_01.png')",
        "card-diamonds-2": "url('/Cards/Diamonds/Diamonds_card_02.png')",
        "card-diamonds-3": "url('/Cards/Diamonds/Diamonds_card_03.png')",
        "card-diamonds-4": "url('/Cards/Diamonds/Diamonds_card_04.png')",
        "card-diamonds-5": "url('/Cards/Diamonds/Diamonds_card_05.png')",
        "card-diamonds-6": "url('/Cards/Diamonds/Diamonds_card_06.png')",
        "card-diamonds-7": "url('/Cards/Diamonds/Diamonds_card_07.png')",
        "card-diamonds-8": "url('/Cards/Diamonds/Diamonds_card_08.png')",
        "card-diamonds-9": "url('/Cards/Diamonds/Diamonds_card_09.png')",
        "card-diamonds-10": "url('/Cards/Diamonds/Diamonds_card_10.png')",
        "card-diamonds-11": "url('/Cards/Diamonds/Diamonds_card_11.png')",
        "card-diamonds-12": "url('/Cards/Diamonds/Diamonds_card_12.png')",
        "card-diamonds-13": "url('/Cards/Diamonds/Diamonds_card_13.png')",
        // clubs
        "card-clubs-1": "url('/Cards/Clubs/Clubs_card_01.png')",
        "card-clubs-2": "url('/Cards/Clubs/Clubs_card_02.png')",
        "card-clubs-3": "url('/Cards/Clubs/Clubs_card_03.png')",
        "card-clubs-4": "url('/Cards/Clubs/Clubs_card_04.png')",
        "card-clubs-5": "url('/Cards/Clubs/Clubs_card_05.png')",
        "card-clubs-6": "url('/Cards/Clubs/Clubs_card_06.png')",
        "card-clubs-7": "url('/Cards/Clubs/Clubs_card_07.png')",
        "card-clubs-8": "url('/Cards/Clubs/Clubs_card_08.png')",
        "card-clubs-9": "url('/Cards/Clubs/Clubs_card_09.png')",
        "card-clubs-10": "url('/Cards/Clubs/Clubs_card_10.png')",
        "card-clubs-11": "url('/Cards/Clubs/Clubs_card_11.png')",
        "card-clubs-12": "url('/Cards/Clubs/Clubs_card_12.png')",
        "card-clubs-13": "url('/Cards/Clubs/Clubs_card_13.png')",
        // spades
        "card-spades-1": "url('/Cards/Spades/Spades_card_01.png')",
        "card-spades-2": "url('/Cards/Spades/Spades_card_02.png')",
        "card-spades-3": "url('/Cards/Spades/Spades_card_03.png')",
        "card-spades-4": "url('/Cards/Spades/Spades_card_04.png')",
        "card-spades-5": "url('/Cards/Spades/Spades_card_05.png')",
        "card-spades-6": "url('/Cards/Spades/Spades_card_06.png')",
        "card-spades-7": "url('/Cards/Spades/Spades_card_07.png')",
        "card-spades-8": "url('/Cards/Spades/Spades_card_08.png')",
        "card-spades-9": "url('/Cards/Spades/Spades_card_09.png')",
        "card-spades-10": "url('/Cards/Spades/Spades_card_10.png')",
        "card-spades-11": "url('/Cards/Spades/Spades_card_11.png')",
        "card-spades-12": "url('/Cards/Spades/Spades_card_12.png')",
        "card-spades-13": "url('/Cards/Spades/Spades_card_13.png')",
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
        "place-card": {
          from: {
            opacity: 0,
            transform: "translateY(-100%) scale(1.5)",
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "place-card": "place-card 0.2s ease-in-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
