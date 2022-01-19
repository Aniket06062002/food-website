burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')

navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightnav')

burger.addEventListener('click',()=>{
  rightNav.classList.toggle('v-class-resp');
  navList.classList.toggle('v-class-resp');
  navbar.classList.toggle('v-nav-resp');
  
})


var typed = new Typed('#typed',{
  strings:["The Teast Kitchen! Best Restaurant In your City","Get Flat 50% of on First Order","You Can Book A Table ","Order Your Food NOW!"],
  backSpeed: 1,
  smartBackspace: true,
  backDelay: 2000,
  startDelay: 1000,
  typeSpeed: 20,
  loop: true,

});

