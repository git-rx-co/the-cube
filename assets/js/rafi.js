
/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});





/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);








// //   all ------------------
// function initParadoxWay() {
//   "use strict";
 
//   if ($(".testimonials-carousel").length > 0) {
//       var j2 = new Swiper(".testimonials-carousel .swiper-container", {
//           preloadImages: false,
//           slidesPerView: 1,
//           spaceBetween: 20,
//           loop: true,
//           grabCursor: true,
//           mousewheel: false,
//           centeredSlides: true,
//           pagination: {
//               el: '.tc-pagination',
//               clickable: true,
//               dynamicBullets: true,
//           },
//           navigation: {
//               nextEl: '.listing-carousel-button-next',
//               prevEl: '.listing-carousel-button-prev',
//           },
//           breakpoints: {
//               1024: {
//                   slidesPerView: 3,
//               },
              
//           }
//       });
//   }
  
// // bubbles -----------------
  
  
//   setInterval(function () {
//       var size = randomValue(sArray);
//       $('.bubbles').append('<div class="individual-bubble" style="left: ' + randomValue(bArray) + 'px; width: ' + size + 'px; height:' + size + 'px;"></div>');
//       $('.individual-bubble').animate({
//           'bottom': '100%',
//           'opacity': '-=0.7'
//       }, 4000, function () {
//           $(this).remove()
//       });
//   }, 350);
  
// }

// //   Init All ------------------
// $(document).ready(function () {
//   initParadoxWay();
// });






