const humberger = document.querySelector('.humberger');
const closeBtn = document.querySelector('.times');
const popUp = document.querySelector('.mobile-nav');
const navLinks = document.querySelectorAll('.nav-links');
// mobile menu
humberger.addEventListener('click', () => {
  popUp.classList.toggle('nav-pop-up');
  closeBtn.classList.toggle('times-pop');
});
closeBtn.addEventListener('click', () => {
  popUp.classList.toggle('nav-pop-up');
  closeBtn.classList.toggle('times-pop');
});
navLinks.forEach((nav) => {
  nav.addEventListener('click', () => {
    popUp.classList.toggle('nav-pop-up');
    closeBtn.classList.toggle('times-pop');
  });
});
// pop up modal
