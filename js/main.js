const burger = document.querySelector('.nav__burger'),
      nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-open')

    document.body.style.overflow = `${nav.classList.contains('nav-open') ? 'hidden' : 'scroll'}`
})