const navToggler = document.getElementById('nav-toggler');
const nav = document.getElementById('nav');


navToggler.addEventListener('click', () => {
    if (navToggler.classList.contains('toggle')) {
        navToggler.classList.remove('toggle');
        nav.classList.remove('nav--active');
    } else {
        navToggler.classList.add('toggle');
        nav.classList.add('nav--active');
    }
});