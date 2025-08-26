/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                colaborae: {
                    blue: '#022744',
                    green: '#9BD60C',
                    coral: '#FF5E5B',
                    cyan: '#00D1FF'
                }
            },
            fontFamily: {
                'display': ['Poppins', 'system-ui', 'sans-serif'],
                'body': ['Inter', 'system-ui', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-hero': 'linear-gradient(135deg, #011522, #000a0f)',
                'gradient-events': 'linear-gradient(180deg, #000a0f, #011522)',
                'gradient-accent': 'linear-gradient(90deg, #9BD60C, #00D1FF)',
                'gradient-coral': 'linear-gradient(135deg, #FF5E5B, #e54845)',
            },
        },
    },
    plugins: [],
}