/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{vue, vuex,js,ts,jsx,tsx}"],
    theme: {
        screens: {
            'xxs': "376px",
            xs: "428px",
            '2xs': "580px",
            sm: "645px",
            md: "768px",
            lg: "1024px",
            xl: "1280px",
            '2xl': "1440px",
            '3xl': "1920px", 
            '4xl': "2048px", 
            '5xl': "2560px",
        },
        extend: {
            backgroundImage: {
                'download': "linear-gradient(to right, rgb(26 68 31 / 83%), rgb(26 68 31 / 61%), rgba(26 68 31 / 15%)), url(/src/assets/images/pngs/mockups/download-bg.png)"
            },
            colors: {
                'brand-light': '#4CAE46',
                'brand': '#3C7C43',
                'brand-dark': '#07431F',
                'white': '#fff',
                'black': '#000',
                'grey-light': '#F4F2F2',
                'font': '16px',
                'grey': '#505050'
            },
            fontFamily: {
                poppins: ['Poppins', 'sans-serif'],
            },
            spacing: {
                '300': "300px",
                '400': "400px",
                '425': "425px",
                '450': "450px",
                '475': "475px",
                '500': "500px",
                '525': "525px",
                '550': "550px",
                '575': "575px",
                '600': "600px",
                '625': "625px",
                '650': "650px",
                '675': "675px",
                '700': "700px",
                '800': "800px",
                '900': "900px",
                '1xl': "5rem",
                '2xl': "10rem",
                '3xl': "15rem",
                '4xl': "20rem",
                '5xl': "25rem",
                '6xl': "30rem",
                '1sl': "7rem",
                '2sl': "14rem",
                '3sl': "21rem",
                '4sl': "28rem",
                '5sl': "35rem",
                '6sl': "42rem",
                '3tl': "32rem",
                '4tl': "40rem",
                '5tl': "48rem",
            }
        },
        borderRadius: {
            '2.5xl': "20px",
        },
        minHeight: {
            '200': '200px'
        },
    },
    variants: {
        imageRendering: ['responsive'],
    },
    plugins: [
        require("@tailwindcss/typography"),
        require("@tailwindcss/forms"),
        require("@tailwindcss/aspect-ratio"),
        require("prettier-plugin-tailwindcss"),
        require('tailwindcss-image-rendering')()
    ],
};
  