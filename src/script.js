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


// menu selection All, food, snack, beverage
const tabs = document.querySelectorAll('.tabs_wrap ul li');
const all = document.querySelectorAll('.items_wrap')
const food = document.querySelectorAll('.food')
const snack = document.querySelectorAll('.snack')
const beverage = document.querySelectorAll('.beverage')


tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(tab => {
            tab.classList.remove("active")
        })
        tab.classList.add('active')

        const tabVal = tab.getAttribute('data-tabs')
        
        all.forEach(item => {
            item.style.display = 'none';
        })
        
        if(tabVal == 'food') {
            food.forEach( item => {
                item.style.display = 'block';
            })
        } else if (tabVal == 'snack') {
            snack.forEach( item => {
                item.style.display = 'block';
            })
        } else if (tabVal == 'beverage') {
            beverage.forEach( item => {
                item.style.display = 'block';
            })
        } else {
            all.forEach( item => {
                item.style.display = 'block';
            })
        }


    })
})


// dark mode

const html = document.querySelector('html')
const themeToggle = document.getElementById('theme_toggle');

themeToggle.addEventListener('click', () => {

    if(localStorage.getItem('mode') == 'light') {
        darkMode();
    } else {
        lightMode();
    }
    console.log(localStorage.getItem('mode'))
})

function darkMode() {
    html.classList.add('dark')
    themeToggle.classList.replace("ri-moon-line", "ri-sun-line")
    localStorage.setItem('mode', 'dark');
}

function lightMode() {
    html.classList.remove('dark')
    themeToggle.classList.replace('ri-sun-line', 'ri-moon-line')
    localStorage.setItem('mode', 'light')
}

