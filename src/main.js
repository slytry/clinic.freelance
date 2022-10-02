import '/style/main.scss';
import './home.scss';

const button = document.querySelector('.header__button');
const menu = document.querySelector('.menu');
const buttonRows = document.querySelectorAll('.header__button-row');

export const greeting = () => {
    document.addEventListener('click', (e) => {
        if (!menu.contains(e.target) && !button.contains(e.target)) {
            menu.classList.remove('menu--open');
        }
    });

    button.addEventListener('click', () => {
        menu.classList.toggle('menu--open');
        buttonRows.forEach((i) => {
            i.classList.toggle('header__button-row--open');
        });
    });
};

const swiper = new Swiper('.mySwiper', {
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
