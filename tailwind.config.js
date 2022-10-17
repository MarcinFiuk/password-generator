/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                body: ['JetBrains'],
            },
            colors: {
                clrPrimary400: 'hsl(127 100% 82%)',

                clrAccent300: 'hsl(251 9% 53%)',
                clrAccent400: 'hsl(42 91% 68%)',
                clrAccent500: 'hsl(13 95% 66%)',
                clrAccent600: 'hsl(0 91% 63%)',

                clrNeutral100: 'hsl(252 11% 91%)',
                clrNeutral800: 'hsl(248 10% 15%)',
                clrNeutral900: 'hsl(248 15% 11%)',
            },
        },
    },
    plugins: [],
};
