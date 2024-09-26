import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		colors: {
			main: '#a388ee',
			mainAccent: '#9e66ff', // not needed for shadcn components
			overlay: 'rgba(0,0,0,0.8)', // background color overlay for alert dialogs, modals, etc.
	  
			// light mode
			bg: '#e3dff2',
			text: '#000',
			border: '#000',
	  
			// dark mode
			darkBg: '#1D1F27',
			darkText: '#eeefe9',
			darkBorder: '#000',
			secondaryBlack: '#1b1b1b', // opposite of plain white, not used pitch black because borders and box-shadows are that color 
		  },
		  borderRadius: {
			base: '5px'
		  },
		  boxShadow: {
			light: '4px 4px 0px 0px #000',
			dark: '4px 4px 0px 0px #000',
		  },
		  translate: {
			boxShadowX: '4px',
			boxShadowY: '4px',
			reverseBoxShadowX: '-4px',
			reverseBoxShadowY: '-4px',
		  },
		  fontWeight: {
			base: '500',
			heading: '700',
		  },
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
