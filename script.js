// Toggle for mobile hamburger menu
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('lick', () => {
  navLinks.classList.toggle('active');
});
