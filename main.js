'use strict';

// toggle JS
const toggle = document.querySelector('.toggle');
const mainNav = document.querySelector('.mainnav');

toggle.addEventListener('click',()=>{
  mainNav.classList.toggle('active');
});


// banner JS
const slides = document.querySelector('.slides'),
  slide = document.querySelectorAll('.slide');

let i = 0;
function slider(){
  i++;
  if(i >= slide.length/2){
    i = 0;
    slides.style.transitionDuration = '0s';
    slides.style.transform = 'translateX('+(i*100)+'vw)';
  } else {
    slides.style.transform = 'translateX('+(-i*100)+'vw)';
    slides.style.transitionDuration = '1s';
  }
  
  
}

setInterval(slider,3000);
