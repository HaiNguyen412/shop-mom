let menuBtn = document.querySelector('.btn-navbar');
let menuBar = document.querySelector('.nav');

menuBtn.onclick =()=>{
    menuBtn.classList.toggle('fa-times');
    menuBar.classList.toggle('active');

}

window.onscroll =()=>{
    menuBtn.classList.remove('fa-times');
    menuBar.classList.remove('active');
}
