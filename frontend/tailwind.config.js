/** @type {import('tailwindcss').Config} */
module.exports = {
    blocklist: ["overline"],
    darkMode: ["class"],
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    theme: {
        extend: {
            fontFamily: {
                serif: ['"Playfair Display"', "Georgia", "serif"],
                sans: ["Outfit", "system-ui", "sans-serif"],
            },
            colors: {
                ink: {
                    DEFAULT: "#050B14",
                    deep: "#0A1128",
                    mid: "#0E1730",
                },
                royal: {
                    light: "#3B82F6",
                    glow: "#60A5FA",
                    DEFAULT: "#2563EB",
                    deep: "#1D4ED8",
                },
                mist: "#94A3B8",
                paper: "#F8FAFC",
                wa: "#25D366",
            },
            boxShadow: {
                glow: "0 8px 32px rgba(37, 99, 235, 0.25)",
                card: "0 20px 60px rgba(0, 0, 0, 0.35)",
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
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
