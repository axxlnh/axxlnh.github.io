const navBtn = document.querySelector('.navBtn');
const header = document.querySelector('header');


navBtn.addEventListener('click',function(){
  header.classList.toggle('active')
})

window.addEventListener('resize',function(){
  header.classList.remove('active')

})