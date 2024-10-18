document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('#myLinks');
  
    burgerMenu.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  });
  