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
      
// JavaScript to set the active class based on the current page
document.querySelectorAll('nav ul li a').forEach(link => {
    // Get the current URL and compare it to the href of each link
    if (window.location.pathname === '/' && link.getAttribute('href') === './index.html') {
        // Mark "Home" as active when at the root domain
        link.classList.add('active');
    } else if (link.href === window.location.href) {
        // Mark the link as active if it matches the current URL
        link.classList.add('active');
    } else {
        // Remove active from other links
        link.classList.remove('active');
    }
});
