/* eslint-disable no-undef */
import '/style/main.scss';
import './analisys.scss';
import '/home.scss';
import '/scripts/burger-menu';

export const swiper = new Swiper('.mySwiper', {
	autoplay: {
		delay: 5000,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	allowTouchMove: true,

	pagination: {
		el: '.swiper-pagination',
	},
	keyboard: true,
});

export const swiper2 = new Swiper('.mySwiper2', {
	slidesPerView: 4,
	centeredSlides: true,
	spaceBetween: 30,
	grabCursor: true,
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
});
