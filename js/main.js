const burger = document.querySelector('.nav__burger'),
      nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-open')
    nav.classList.contains('nav-open') ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'scroll'

})