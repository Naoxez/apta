document.addEventListener('DOMContentLoaded', () => {
	const swiper = new Swiper('.workflow__cards', {
		// Navigation arrows
		navigation: {
			nextEl: '.workflow__arrow-right',
			prevEl: '.workflow__arrow-left',
		},

		slidesPerView: 4,
	});
});
