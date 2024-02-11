const wrapper = document.querySelector('.wrapper');
const forgotContainer = document.querySelector('.forgotContainer');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnlogin-popup');
const iconClose = document.querySelector('.icon-close');
const forgotPass = document.querySelector('.forget-remember .forgot-pass');

registerLink.addEventListener('click', ()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=>{
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click',()=>{
    wrapper.classList.toggle('active-popup');
});

iconClose.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
});

forgotPass.addEventListener('click',()=>{
    forgotContainer.classList.add('.active');
});
