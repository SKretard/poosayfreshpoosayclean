const mainHead = document.querySelector('.main-head')
const mainMenu = document.querySelector('.main-menu')
const mainLink = document.querySelector('.main-head .main-menu .nav-menu .nav-list .nav-list-items .nav-link')
const logo = document.querySelector('.logo')
window.addEventListener('scroll',function(){
    if(this.scrollY >80){
        mainHead.classList.add('slidedown');
        mainMenu.classList.add('slidedown2');
    }else{
        mainHead.classList.remove('slidedown');
        mainMenu.classList.remove('slidedown2');
    }
})