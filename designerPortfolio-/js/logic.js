const burger = document.getElementById('burger')
const mobileNav = document.querySelector('.mobile-nav')
let able = true

burger.addEventListener('click', () => {
    if (able) {
        mobileNav.style.display = 'block'
    } else {
        mobileNav.style.display = 'none'
    }
    able = !able
})