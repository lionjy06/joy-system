'use strict';



// toggle JS
const toggle = document.querySelector('.toggle');
const mainNav = document.querySelector('.mainnav');

toggle.addEventListener('click',()=>{
  mainNav.classList.toggle('active');
});