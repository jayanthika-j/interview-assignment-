/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'teal-primary': '#0D7C8E',
                'teal-dark': '#0A5F6D',
                'teal-light': '#E8F4F6',
                'gray-form': '#F5F5F5',
            },
        },
    },
    plugins: [],
}
