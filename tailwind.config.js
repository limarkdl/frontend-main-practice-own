/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
        extend: {
            colors: {
                'primary-color': 'var(--primary-color)',
                'bg-color': 'var(--bg-color)',
                'inverted-bg-color': 'var(--inverted-bg-color)',
                'sidebar-bg-color': 'var(--sidebar-bg-color)',
            },
            fontSize: {
                'size-l': 'var(--font-size-l)',
                'size-m': 'var(--font-size-m)',
            },
            fontFamily: {
                main: 'var(--font-family-main)',
            },
            lineHeight: {
                'size-l': 'var(--font-line-l)',
                'size-m': 'var(--font-line-m)',
            },
            height: {
                sidebar: 'var(--sidebar-height)',
            },
            transitionDuration: {
                'color-transition-global': 'var(--color-animation-duration)',
            },
        },
    },
    variants: {},
    plugins: [],
    content: [
        // Example content paths...
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
};
