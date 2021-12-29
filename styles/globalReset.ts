import { globalCss } from '../stitches.config';

export const globalStyles = globalCss({
	/* 1. Use a more intuitive box model */
	'*,*::after,*::before': {
		boxSizing: 'inherit',
		margin: 0,
		padding: 0
	},
	/* 2. Default reset on html and body */
	'html,body': {
		height: '100%',
		boxSizing: 'border-box'
	},
	/* 3. Reset base font-size to 10px from 16px */
	html: {
		fontSize: '62.5%'
	},
	/* 4. Improve text rendering */
	body: {
		lineHeight: '1.5',
		fontFamily: '$body',
		'webkit-font-smoothing': 'antialiased',
		color: '$textColor',
		bgColor: '$gray2',
		fontWeight: '$regular'
	},
	/* 5. Improve media defaults */
	'img,picture,video,canvas,svg': {
		display: 'block',
		maxWidth: ' 100%'
	},
	/* 6. Improve default form typography */
	'input,button,textarea,select': {
		font: 'inherit',
		userSelect: 'one'
	},
	button: {
		cursor: 'pointer',
		userSelect: 'none'
	},
	/* 7. Avoid text overflows */
	'p,h1,h2,h3,h4,h5,h6': {
		overflowWrap: 'break-word'
	}
});
