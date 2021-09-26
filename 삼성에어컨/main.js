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

//sam scroll
const SSone = document.querySelector('.SSside-oneway'),
      SStwo = document.querySelector('.SSside-twoway'),
      SSfour = document.querySelector('.SSside-fourway'),
      SScircle = document.querySelector('.SSside-circle'),
      SSduct = document.querySelector('.SSside-duct'),
      SShanger = document.querySelector('.SSside-hanger'),
      SSnorm = document.querySelector('.SSside-norm'),
      SShuge = document.querySelector('.SSside-huge');

const samOneway = document.querySelector('.sam-oneWay'),
      samTwoway = document.querySelector('.sam-twoWay'),
      samFourway = document.querySelector('.sam-fourWay'),
      samCircle = document.querySelector('.sam-circle'),
      samMae = document.querySelector('.sam-mae'),
      samHanging = document.querySelector('.sam-hanging'),
      samNormal = document.querySelector('.sam-normal'),
      samBig = document.querySelector('.sam-big');


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

SSone.addEventListener('click',()=>{
  roofTab.classList.add('active');
  roofList.classList.add('active');
  standTab.classList.remove('active');
  standList.classList.remove('active');
  samOneway.scrollIntoView({behavior:"smooth",block:'center',inline
:'center'});
});

SStwo.addEventListener('click',()=>{
  roofTab.classList.add('active');
  roofList.classList.add('active');
  standTab.classList.remove('active');
  standList.classList.remove('active');
  samTwoway.scrollIntoView({behavior:"smooth",block:'center',inline
:'center'});
});

SSfour.addEventListener('click',()=>{
  roofTab.classList.add('active');
  roofList.classList.add('active');
  standTab.classList.remove('active');
  standList.classList.remove('active');
  samFourway.scrollIntoView({behavior:"smooth",block:'center',inline
:'center'});
});

SScircle.addEventListener('click',()=>{
  roofTab.classList.add('active');
  roofList.classList.add('active');
  standTab.classList.remove('active');
  standList.classList.remove('active');
  samCircle.scrollIntoView({behavior:"smooth",block:'center',inline
:'center'});
});

SSduct.addEventListener('click',()=>{
  roofTab.classList.add('active');
  roofList.classList.add('active');
  standTab.classList.remove('active');
  standList.classList.remove('active');
  samMae.scrollIntoView({behavior:"smooth",block:'center',inline
:'center'});
});

SShanger.addEventListener('click',()=>{
  roofTab.classList.add('active');
  roofList.classList.add('active');
  standTab.classList.remove('active');
  standList.classList.remove('active');
  samHanging.scrollIntoView({behavior:"smooth",block:'center',inline
:'center'});
});

SSnorm.addEventListener('click',()=>{
  standList.classList.add('active');
  standTab.classList.add('active');
  roofTab.classList.remove('active');
  roofList.classList.remove('active');
  samNormal.scrollIntoView({behavior:"smooth",block:'center',inline
  :'center'});
})

SShuge.addEventListener('click',()=>{
  standList.classList.add('active');
  standTab.classList.add('active');
  roofTab.classList.remove('active');
  roofList.classList.remove('active');
  samBig.scrollIntoView({behavior:"smooth",block:'center',inline
  :'center'});
})