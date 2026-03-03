import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                primary: {
                    DEFAULT: '#002C5F', // Dark Blue from logo
                    light: '#004a9f',
                    dark: '#001a38',
                },
                secondary: {
                    DEFAULT: '#FF6B35', // Orange from logo/button
                    light: '#ff855c',
                    dark: '#e04e1a',
                },
                accent: {
                    DEFAULT: '#FFFFFF', // White
                    gray: '#F3F4F6',
                }
            }
        },
    },
    plugins: [],
};
export default config;
