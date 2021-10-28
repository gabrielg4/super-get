AOS.init({
  duration: 1000,
  once: true
});


const btnMenu = document.getElementById('js-btn-mobile');
const overlayMenu = document.querySelector('.js-overlay');

function openMenuMobile() {
  document.documentElement.classList.add('menu-opened');
}

function closeMenuMobile() {
  document.documentElement.classList.remove('menu-opened');
}

btnMenu.addEventListener('click', openMenuMobile);
overlayMenu.addEventListener('click', closeMenuMobile);