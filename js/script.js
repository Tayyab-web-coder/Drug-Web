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
 


 function toggleFAQ(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle("active");
  }
  
  let video=document.querySelector('video')
let PlayIcon=document.querySelector('#play')
  PlayIcon.addEventListener('click', () => {    
    if (PlayIcon.classList.contains('fa-play')) {
        video.play()
        PlayIcon.classList.replace('fa-play', 'fa-pause');
    } else {
        video.pause()
        PlayIcon.classList.replace('fa-pause', 'fa-play');
    }
}); 
 let CouncellingVideo=document.querySelector('.counceling-content video')
 let CouncellingPlayIcon=document.querySelector('.counceling-content #play')
  CouncellingPlayIcon.addEventListener('click', () => {    
    console.log('gewew');
    
    if (CouncellingPlayIcon.classList.contains('fa-play')) {
        CouncellingVideo.play()
        CouncellingPlayIcon.classList.replace('fa-play', 'fa-pause');
    } else {
        CouncellingVideo.pause()
        CouncellingPlayIcon.classList.replace('fa-pause', 'fa-play');
    }
});