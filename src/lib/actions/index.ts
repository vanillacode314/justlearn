// hide on scrolling bottom using height and animation api
export function hideOnScroll(node: HTMLElement, { duration = 100 } = {}) {
	let lastScrollTop = 0;
	function onScroll() {
		if (scrollTop - lastScrollTop > 0) {
			node.animate([{ height: 'auto' }, { height: `0px` }], {
				duration,
				easing: 'ease-in-out'
			});
		} else {
			console.log('onScroll');
			node.animate([{ height: `0px` }, { height: 'auto' }], {
				duration,
				easing: 'ease-in-out'
			});
		}
		lastScrollTop = scrollTop;
	}

	window.addEventListener('scroll', onScroll, true);
	return {
		destroy() {
			window.removeEventListener('scroll', onScroll);
		}
	};
}
