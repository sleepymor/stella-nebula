/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "index.html"
    , "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neonblue': {
          light:'#B2EBF2',
          soft:'#6EC1E4',
          muted:'#4A9BD8',
          deep:'#00BFFF',
          dark:'#003F6C',
        },
        'neongreen': {
          light:'#D2F8D2',
          soft:'#9AEF9A',
          muted:'#66D28E',
          deep:'#39FF14',
          dark:'#004D20',
        },
        'neoncyan': {
          light:'#B3F9F9',
          soft:'#00E5E3',
          muted:'#00C1C1',
          deep:'#00B2B2',
          dark:'#005D5D',
        },
        'neonyellow': {
          light:'#F3F9A1',
          soft:'#EAF038',
          muted:'#D6D32F',
          deep:'#F2D01B',
          dark:'#9B9A00',
        },
        'neonpurple': {
          light:'#D6A6F0',
          soft:'#9B8FD7',
          muted:'#8A6ECF',
          deep:'#6A3F9F',
          dark:'#2E1A5E',
        },
      },
    },
  },
plugins: [],
};
