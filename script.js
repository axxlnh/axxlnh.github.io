const navBtn = document.querySelector('.navBtn');
const header = document.querySelector('header');


navBtn.addEventListener('click',function(){
  header.classList.toggle('active')
})

window.addEventListener('resize',function(){
  header.classList.remove('active')

})


jQuery(document).ready(function($) {$(".scroll").click(function(event){            event.preventDefault();$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);});});
