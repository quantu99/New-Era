const { space } = require('postcss/lib/list');

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './src/modules/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                italia: ['Italiana', 'serif'],
                spaceGrotesk: ['Space Grotesk', 'sans-serif'],
            },
            scrollBar: {
                '.no-scrollbar': {
                    '-webkit-overflow-scrolling': 'touch',
                    'scrollbar-width': 'none',
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    '-ms-overflow-style': 'none',
                },
            },
            colors: {
                special: {
                    green: '#122620',
                    tan: '#b68d40',
                    cream: '#f4ebd0',
                    gold: '#d6ad60',
                },
                soft: {
                    black: '#1B1F1C',
                    grey: '#f8f8f8',
                    red: '#ffe1e1',
                    yellow: '#fdffc2',
                    blue: '#c9faff',
                    pink: '#ffdaf0',
                    purple: '#e0e1ff',
                    orange: '#ffe7bb',
                },
                dark: {
                    grey: '#767676',
                    orange: '#df4e00',
                },
                hard: {
                    green: '#10b510',
                    purple: '#9900ff',
                    bluePurple: '#2e03cd',
                },
                medium: {
                    green: '#0acb00',
                    blue: '#00b2ff',
                },
                green: {
                    primary: '#00b14f',
                    primaryOutline: 'rgba(0,177,79,.102)',
                },
                light: {
                    grey: '#f5f5f5',
                    green: '#c3ffc3',
                    yellow: '#fffeef',
                },
                main: {
                    grey: '#cbcbcb',
                    green: '#44f244',
                    yellow: '#ffcc00',
                    blue: '#0066ff',
                    pink: '#ff00c8',
                    bluePurple: '#c9d0ff',
                    red: '#FF0000',
                },
                green: {
                    1: '#EEFBF3',
                    2: '#D6F5E1',
                    3: '#AFEBC7',
                    4: '#7CD9A8',
                    5: '#46C185',
                    6: '#23A66B',
                    7: '#168B58',
                    8: '#116B46',
                    9: '#105539',
                    10: '#0E4630',
                },
                superLight: {
                    grey: '#F3F3F3',
                },
                navShadow: 'rgba(14, 255, 66, 0.33)',
                primaryBlack: '#212f3f',
                secondaryBlack: '#6c757d',
                primaryGray: '#303235',
                secondaryGray: '#f0f0f0',
                backgroundGray: '#F7F9FC',
                backgroundLightGray: '#FFFFFF',
                warning: '#ff5656',
            },
            gap: {
                'custom-gap': '26px',
            },
            backgroundImage: {
                divider: 'linear-gradient(0deg,hsla(210,4%,91%,0),#e6e7e8 31.5%,#e6e7e8 70%,hsla(210,4%,91%,0))',
                divide2: 'linear-gradient(0deg, #fff, #dadada 50.45%, #fff)',
                mainTitle: 'linear-gradient(180deg, #00341D, #0C9B5B, #29DA70)',
                golden: 'linear-gradient(to right,#AA771C, #BF953F, #FCF6BA )',
                button: 'linear-gradient(270deg, rgba(223, 190, 106, 0.8), rgba(146, 111, 52, 0.8), rgba(34, 34, 34, 0), rgba(34, 34, 34, 0))',
            },
            boxShadow: {
                normal: '0 1px 16px rgba(0,0,0,.06)',
                jobcard: '4px 4px 4px 0px #00000014',
                nav: '0px 4px 4px 0px #00000040 inset',
                navigation: '0px 4px 4px 0px #00000014',
                botNav: '0px -2px 4px 0px #00000014',
                notification: '0px 4px 16px 0px #00000029',
                popup: '0 0 8px #888',
                popupHover: '0 0 10px #555',
            },
            keyframes: {
                shake: {
                    '0%, 100%': { transform: 'rotate(0deg)' },
                    '10%, 30%, 50%, 70%, 90%': { transform: 'rotate(-10deg)' },
                    '20%, 40%, 60%, 80%': { transform: 'rotate(10deg)' },
                },
            },
            animation: {
                shake: 'shake 0.8s infinite',
            },
        },
    },
    plugins: [],
};
