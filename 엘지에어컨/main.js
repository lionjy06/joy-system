'use strict';



// toggle JS
const toggle = document.querySelector('.toggle');
const mainNav = document.querySelector('.mainnav');

toggle.addEventListener('click',()=>{
  mainNav.classList.toggle('active');
});


// tab JS
const roofTab = document.querySelector('.tab > ul > li:nth-child(1)');
const standTab = document.querySelector('.tab > ul > li:nth-child(2)');
const roofList = document.querySelector('.roof');
const standList = document.querySelector('.stand');

roofTab.addEventListener('click',()=>{
  roofTab.classList.add('active');
  roofList.classList.add('active');
  standTab.classList.remove('active');
  standList.classList.remove('active');
});
standTab.addEventListener('click',()=>{
  standList.classList.add('active');
  standTab.classList.add('active');
  roofTab.classList.remove('active');
  roofList.classList.remove('active');
});

// 사이드바 위치
const aside = document.querySelector('.side-container');
window.addEventListener('scroll', function(){
  if(window.scrollY > 270){
    aside.style.position = 'fixed';
    aside.style.top = '150px';
  }
  else if(window.scrollY < 270){
    aside.style.position = 'absolute';
    aside.style.top = '420px';
  }
})

//LG scroll 
const LGone = document.querySelector('.LGside-oneway'),
      LGtwo = document.querySelector('.LGside-twoway'),
      LGfour = document.querySelector('.LGside-fourway'),
      LGform = document.querySelector('.LGside-circle'),
      LGduct = document.querySelector('.LGside-duct'),
      LGhanger = document.querySelector('.LGside-hanger'),
      LGnorm = document.querySelector('.LGside-norm'),
      LGhuge = document.querySelector('.LGside-huge');
      



const LGoneWay = document.querySelector('.LGoneway'),
      LGtwoWay = document.querySelector('.LGtwoway'),
      LGfourWay = document.querySelector('.LGfourway'),
      LGcircle = document.querySelector('.LGcircle'),
      LGmae = document.querySelector('.LGmae'),
      LGhanging = document.querySelector('.LGhanging'),
      LGnormal = document.querySelector('.LGnormal'),
      LGbig = document.querySelector('.LGbig');


LGone.addEventListener('click',()=>{
  roofTab.classList.add('active');
  roofList.classList.add('active');
  standTab.classList.remove('active');
  standList.classList.remove('active');
  LGoneWay.scrollIntoView({behavior:'smooth',block:'center',inline:'center'});
});

LGtwo.addEventListener('click',()=>{
  roofTab.classList.add('active');
  roofList.classList.add('active');
  standTab.classList.remove('active');
  standList.classList.remove('active');
  LGtwoWay.scrollIntoView({behavior:'smooth',block:'center',inline:'center'});
});

LGfour.addEventListener('click',()=>{
  roofTab.classList.add('active');
  roofList.classList.add('active');
  standTab.classList.remove('active');
  standList.classList.remove('active');
  LGfourWay.scrollIntoView({behavior:'smooth',block:'center',inline:'center'});
});

LGform.addEventListener('click',()=>{
  roofTab.classList.add('active');
  roofList.classList.add('active');
  standTab.classList.remove('active');
  standList.classList.remove('active');
  LGcircle.scrollIntoView({behavior:'smooth',block:'center',inline:'center'});
});

LGduct.addEventListener('click',()=>{
  roofTab.classList.add('active');
  roofList.classList.add('active');
  standTab.classList.remove('active');
  standList.classList.remove('active');
  LGmae.scrollIntoView({behavior:'smooth',block:'center',inline:'center'});
});

LGhanger.addEventListener('click',()=>{
  roofTab.classList.add('active');
  roofList.classList.add('active');
  standTab.classList.remove('active');
  standList.classList.remove('active');
  LGhanging.scrollIntoView({behavior:'smooth',block:'center',inline:'center'});
});

LGnorm.addEventListener('click',()=>{
  standList.classList.add('active');
  standTab.classList.add('active');
  roofTab.classList.remove('active');
  roofList.classList.remove('active');
  LGnormal.scrollIntoView({behavior:'smooth',block:'center',inline:'center'});
});

LGhuge.addEventListener('click',()=>{
  standList.classList.add('active');
  standTab.classList.add('active');
  roofTab.classList.remove('active');
  roofList.classList.remove('active');
  LGbig.scrollIntoView({behavior:'smooth',block:'center',inline:'center'});
});