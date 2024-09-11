import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
	 
	screens: {
		sm: '640px',
		md: '768px',
		lg: '960px',
		xl: '1200px',
	},
  	extend: {
  	        fontFamily:{
	            sevillana:['Sevillana','sans-serif'],
		},	
		colors:{
			darkPurple: '#2E073F',
			vibrantPurple: '#7A1CAC',
			magentaPurple: '#AD49E1',
			lightLavender: '#EBD3F8',
		},
  	},
  },
  plugins: [require("tailwindcss-animate")],
};
