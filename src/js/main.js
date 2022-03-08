import '../styles/main.scss';
import ActiveMenuLink from "active-menu-link"

const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.mobile-close');
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

    closeBtn.style.visibility = 'visible'
    closeBtn.style.opacity = 1
})

document.addEventListener('click', function ({ target }) {
    if (target === closeBtn || target.tagName === 'SPAN' || target === menuOverlay) {
        menu.classList.remove('menu__active')
        menuOverlay.style.display = ''

        // setTimeout(() => hamburger.style.display = 'flex', 200)
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


if (windowExtension.matches) {
    let options = {
        activeClass: "active-item"
    }

    new ActiveMenuLink('.menu', options)
    document.addEventListener('scroll', () => {
        if (window.scrollY > 150) {
            headerEl.classList.add('scrolled-header')
        }
        else {
            headerEl.classList.remove('scrolled-header')
        }

    })

}
