const button = document.querySelector('.burger__button');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close');

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

closeBtn.addEventListener('click', () => {
    menu.classList.remove('menu--open');
});
