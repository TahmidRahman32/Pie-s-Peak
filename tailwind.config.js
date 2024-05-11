/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            pint: "#02b76c",
         },
         backgroundImage: {
            "banner-img": "url('./src/assets/img/portrait-senior-pizzeria-chef-portrait-chef-work-delivering-fresh-pizza.png')",
           
         },
      },
   },
   plugins: [require("daisyui")],
};

