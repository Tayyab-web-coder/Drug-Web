const hamburger = document.querySelector('#hamburger');
const ul = document.querySelector('ul');

hamburger.addEventListener('click', () => {
    ul.classList.toggle('show');
    
    // Toggle between hamburger and "X" icon
    if (hamburger.classList.contains('fa-bars')) {
        hamburger.classList.replace('fa-bars', 'fa-x');
    } else {
        hamburger.classList.replace('fa-x', 'fa-bars');
    }
});
      
window.onload = function() {
    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
       if (link.href === window.location.href) {
          link.classList.add('active');
       } else {
          link.classList.remove('active');
       }
    });
 };
 
