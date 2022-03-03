import '../styles/main.scss';

const hamburger = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.mobile-close');
const menu = document.querySelector('.menu');
const menuOverlay = document.querySelector('.menu-overlay');
const playBtn = document.querySelector('.play-button-bg');
const video = document.querySelector('.video');
const windowExtension = window.matchMedia("(max-width: 575px)");
let isPaused;

hamburger.addEventListener('click', function () {
    menu.classList.add('menu__active')
    menuOverlay.style.display = 'block'
    hamburger.style.display = 'none'

})

document.addEventListener('click', function ({ target }) {
    console.log(target);
    if (target === closeBtn || target.tagName === 'SPAN' || target === menuOverlay) {
        menu.classList.remove('menu__active')
        menuOverlay.style.display = ''

        setTimeout(() => hamburger.style.display = 'flex', 200)
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


