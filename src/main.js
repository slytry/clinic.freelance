import '/style/main.scss';
import './home.scss';

const button = document.querySelector('.burger__button');
const menu = document.querySelector('.menu');

document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !button.contains(e.target)) {
        menu.classList.remove('menu--open');
    }
});
document.addEventListener('keyup', (e) => {
    if (menu.classList.contains('menu--open') && e.key === 'Escape') {
        menu.classList.remove('menu--open');
    }
});

button.addEventListener('click', () => {
    menu.classList.toggle('menu--open');
});

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
    // mousewheel: true,
    keyboard: true,
});
