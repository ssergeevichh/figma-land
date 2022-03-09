import '../styles/main.scss';

const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.mobile-close');
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('.menu-list > li')
const menu = document.querySelector('.menu');
const menuOverlay = document.querySelector('.menu-overlay');
const playBtn = document.querySelector('.play-button-bg');
const headerEl = document.querySelector('#header')
const video = document.querySelector('.video');
const windowExtension = window.matchMedia("(max-width: 575px)");
let isPaused;

hamburger.addEventListener('click', function () {
    menu.classList.add('menu__active')
    menuOverlay.style.display = 'block'
    hamburger.style.opacity = 0
    hamburger.style.visibility = 'hidden'

    headerEl.classList.add('header--active-state')

    closeBtn.style.visibility = 'visible'
    closeBtn.style.opacity = 1
})

document.addEventListener('click', function ({ target }) {
    if (target === closeBtn || target.tagName === 'SPAN' || target === menuOverlay) {
        menu.classList.remove('menu__active')
        menuOverlay.style.display = ''

        if (window.scrollY === 0) {
            headerEl.classList.remove('header--active-state')
        }

        closeBtn.style.visibility = 'hidden'
        closeBtn.style.opacity = 0

        setTimeout(() => {
            hamburger.style.visibility = 'visible'
            hamburger.style.opacity = 1

        }, 100)


    }
})

if (windowExtension.matches) {
    video.setAttribute('poster', '/img/mobile-laptop.png')
}

playBtn.addEventListener('click', () => {
    video.setAttribute('controls', 'controls')
    playBtn.style.display = 'none'
    video.play()

    isPaused = false

    if (isPaused) {
        playBtn.style.display = 'block'
    }

})

video.addEventListener('click', () => {
    isPaused = !isPaused

    if (isPaused) {
        playBtn.style.display = 'block'
    } else {
        playBtn.style.display = 'none'
    }

})

window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        headerEl.classList.add('header--active-state')
    }
    else if (!menu.classList.contains('menu__active')) {
        headerEl.classList.remove('header--active-state')
    }

    let currentSection = ''
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.clientHeight
        if (scrollY >= (sectionTop - sectionHeight / 3)) {
            currentSection = section.getAttribute('id')
        }
    })
    navLi.forEach(li => {
        li.classList.remove('active-item')
        if (li.classList.contains(currentSection)) {
            li.classList.add('active-item')
        }
    })
})



