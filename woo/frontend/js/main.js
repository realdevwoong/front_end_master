const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');
searchEl.addEventListener('click', function(){
  searchInputEl.focus();
});
searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합검색');
});

searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
});

const badgeEl = document.querySelector('header .badges');
window.addEventListener('scroll', _.throttle(function(){
  console.log(window.scorllY)
  if(window.scrollY>500){
    // gsap.to(요소, 지속시간(), 옵션);
    gsap.to(badgeEl, .6, {
      opacity:0,
      display:'none'
    })
  }else{
    //배지보이기 
    gsap.to(badgeEl, .6, {
      opacity:1,
      display:'block'
    });
  }
},300));

const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  // gsap.to(요소, 지속시간(), 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index+1) *.7,
    opacity:1
  });
});

