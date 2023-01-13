// Place to store custom @vueuse/motion directives
// https://motion.vueuse.org/directive-usage.html#custom-directives

const directives = {
	directives:{
		'pop-bottom': {
			initial: {
				scale: 0,
				opacity: 0,
			},
			enter:{
				scale: 1,
				opacity: 1,
				transition: {
					type: 'spring',
					stiffness: 200,
					damping: 6,
					mass: 0.1,
				},
			},
		},
	}
}

export default directives