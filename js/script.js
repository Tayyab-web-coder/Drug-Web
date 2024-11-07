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
      
      // JavaScript to dynamically add the active class
        document.querySelectorAll('nav ul li a').forEach(link => {
            // Remove active class from all links
            link.classList.remove('active');
            
            // Add active class to the link that matches the current URL
            if (link.href === window.location.href) {
                link.classList.add('active');
            }
        });