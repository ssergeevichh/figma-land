import '../styles/main.scss'

const hamburger = document.querySelector('.hamburger')
const closeBtn = document.querySelector('.mobile-close')
const menu = document.querySelector('.menu')
const menuOverlay = document.querySelector('.menu-overlay')

hamburger.addEventListener('click', function () {
    menu.classList.add('menu__active')
    menuOverlay.style.display = 'block'
    hamburger.style.display = 'none'

})
document.addEventListener('click', function ({ target }) {
    if (target === closeBtn || target.tagName === 'SPAN' || target === menuOverlay) {
        menu.classList.remove('menu__active')
        menuOverlay.style.display = ''

        setTimeout(() => hamburger.style.display = 'flex', 200)
    }
})
