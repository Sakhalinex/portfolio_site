const burger = document.querySelector('.nav__burger'),
      nav = document.querySelector('.nav');

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-open')
    
})