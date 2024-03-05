const hamburger = document.getElementById('hamburger');
const nav_menu = document.getElementById('nav_menu');
const nav_close = document.getElementById('nav_close');
const nav_links = document.querySelectorAll('.nav__link');


hamburger.addEventListener('click', () => {
    nav_menu.classList.remove('hidden')
})

nav_close.addEventListener('click', () => {
    nav_menu.classList.add('hidden')
})

nav_links.forEach(link => {
    link.addEventListener('click', () => {
        nav_menu.classList.add('hidden')
    })
})