const language = document.querySelector('.language')
const En = document.querySelector('.EN')
const Ru = document.querySelector('.RU')

En.addEventListener('click', () => {
    language.innerHTML = '<img src="src/icon/Icon_Planet.png" alt="Planet">EN'
})

Ru.addEventListener('click', () => {
    language.innerHTML = '<img src="src/icon/Icon_Planet.png" alt="Planet">RU'
})

const humburger = document.querySelector('.humburger')
const mediaMenuHumburgermenu = document.querySelector('.mediamenu__humburgermenu')

const humburgerTop = document.getElementById('1')
const humburgerCenter = document.getElementById('2')
const humburgerBottom = document.getElementById('3')

mediaMenuHumburgermenu.addEventListener('click', () => {
    humburger.classList.toggle('active');
    humburgerTop.classList.toggle('top');
    humburgerCenter.classList.toggle('center');
    humburgerBottom.classList.toggle('bottom');
})