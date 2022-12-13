/** @type {import('tailwindcss').Config} */
module.exports = {
    purge: [
        './dist/*.html',
    ],
    content: [
        './src/**/*.tsx',
        './public/index.html',
    ],
    theme: {
        extend: {
            colors: {
                'primary-blue': '#0992C8',
                'white-blue': '#f8f8f8',
            },
        },
    },
    plugins: [],
};
