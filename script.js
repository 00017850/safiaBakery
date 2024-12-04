const searchIcon=document.querySelector('.search-icon');
const searchForm=document.querySelector('.searching');
const menuIcon=document.querySelector('.menu-icon');
const navBar=document.querySelector('.navbar');


searchIcon.addEventListener('click', () =>{
    searchForm.classList.add('active');
    cartItemsBox.classList.remove('active');
    navBar.classList.remove('active');
});

menuIcon.addEventListener('click', () =>{
    navBar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItemsBox.classList.remove('active');
});

const cartIcon=document.querySelector('.cart-icon');
const cartItemsBox=document.querySelector('.cart-items-box');

cartIcon.addEventListener('click', () =>{
    cartItemsBox.classList.add('active');
    searchForm.classList.remove('active');
    navBar.classList.remove('active');
});

window.onscroll= ()=> {
    cartItemsBox.classList.remove('active');
    searchForm.classList.remove('active');
    navBar.classList.remove('active');
};

const faqAnswer1=document.querySelector("#f1");

faqAnswer1.addEventListener("click", ()=>{
    faqAnswer1.classList.toggle("active");
});

const faqAnswer2=document.querySelector("#f2");

faqAnswer2.addEventListener("click", ()=>{
    faqAnswer2.classList.toggle("active");
});

const faqAnswer3=document.querySelector("#f3");

faqAnswer3.addEventListener("click", ()=>{
    faqAnswer3.classList.toggle("active");
});

const faqAnswer4=document.querySelector("#f4");

faqAnswer4.addEventListener("click", ()=>{
    faqAnswer4.classList.toggle("active");
});

