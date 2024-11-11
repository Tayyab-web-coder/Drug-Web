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
    
    if (CouncellingPlayIcon.classList.contains('fa-play')) {
        CouncellingVideo.play()
        CouncellingPlayIcon.classList.replace('fa-play', 'fa-pause');
    } else {
        CouncellingVideo.pause()
        CouncellingPlayIcon.classList.replace('fa-pause', 'fa-play');
    }
});
var testiomnialData = [
    {
        avatar: "./images/testimonail1.jpg",
        name: "Simonette Lindermann",
        review: "Mind-blowing discovery! changed my routine. Essential for everyone. A vise advice to all interested. Can't imagine without it!"
    },
    {
        avatar: "./images/testimonail2.jpg",
        name: "Merilee Beal",
        review: "Unbelievable gem! Altered my life. A must-have now. Wholeheartedly advise it to everyone. An absolute game-changer"
    },
    {
        avatar: "./images/testimonail3.jpg",
        name: "Suzi Lankester",
        review: "Phenomenal addition! Completely transformed my days. Can't go without it. Strongly endorse for all. A game-changer for sure!"
    },
    {
        avatar: "./images/testimonail4.jpg",
        name: "Gaston Cunnow",
        review: "Amazing product! It changed my life. Can't live without it now. Highly recommended to everyone!"
    },
    {
        avatar: "./images/testimonail5.jpg",
        name: "Marys Lobb",
        review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
    },
    {
        avatar: "./images/testimonail1.jpg",
        name: "Marys Lobb",
        review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
    }, {
        avatar: "./images/testimonail2.jpg",
        name: "Marys Lobb",
        review: "Life-altering find! Indispensable now. Enthusiastically suggest to all. A game-changer for everyone!"
    }]
var slideHolder = document.querySelector("#slideHolder")
for (let i of testiomnialData) slideHolder.innerHTML += `<div class="swiper-slide"> <div class="ImgHolder"><img src="${i.avatar}"></div><div class="ContentHolder"><h2>${i.name}</h2><p>${i.review}</p></div></div>`

const swiper = new Swiper('#craouselContainer', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 2.3,
    loop: true,
    spaceBetween: 30,
    effect: "coverflow",
    coverflowEffect: {
        rotate: 0,
        depth: 800,
        slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    autoplay: { delay: 500 }
});
window.onresize = queryResizer
queryResizer()
function queryResizer() {
    if (window.innerWidth < 724) swiper.params.slidesPerView = 2
    if (window.innerWidth > 501) swiper.params.slidesPerView = 2
    if (window.innerWidth > 724) swiper.params.slidesPerView = 2.3
    if (window.innerWidth < 501) swiper.params.slidesPerView = 1
    swiper.update()
}