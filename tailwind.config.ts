import type { Config } from "tailwindcss";

module.exports= {
    content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
	screens: {
		xs: '290px',
		sm: '640px',
		md: '768px',
		lg: '1280px',
		xl: '1536px',
	},
  	extend:{
  	        fontFamily:{
	            sevillana:['Sevillana','sans-serif'],
				code:['Fira Code','sans-serif'],
		    },	
			colors:{
				darkCharcoal: '#222831',
				grayishBlue: '#393E46',
				modernCyan: '#00ADB5',
				lightGrey: '#EEEEEE',
				lightLavender: '#EBD3F8',
			},
  	},

  },
  plugins: [],
};
