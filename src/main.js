import '/style/main.scss';

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
    mousewheel: true,
    keyboard: true,
});
