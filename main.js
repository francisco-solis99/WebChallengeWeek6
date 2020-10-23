const SLIDES = [
    {
        title:'Discover innovative ways to decorate',
        text:' We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
        srcMobil: './images/mobile-image-hero-1.jpg',
        srcDesktop: './images/desktop-image-hero-1.jpg'
    },

    {
        title:' We are available all across the globe',
        text:'With stores all over the world it’s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don’t hesitate to contact us today.',
        srcMobil: './images/mobile-image-hero-2.jpg',
        srcDesktop: './images/desktop-image-hero-2.jpg'
    },

    
    {
        title:' Manufactured with the best materials',
        text:'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
        srcMobil: './images/mobile-image-hero-3.jpg',
        srcDesktop: './images/desktop-image-hero-3.jpg'
    }




];

// --------------------DOM elements-----------------

//icons
const burguerIcon = document.querySelector('#burguer');
const closeIcon = document.querySelector('.menu__close-icon');
// arrows
const leftArrow = document.getElementById('arrowLeft');
const rightArrow = document.getElementById('arrowRight');
// image
const image = document.getElementById('imageSlide');
// texts
const titleSlide = document.querySelector('.hero__title');
const textSlide = document.querySelector('.hero__text');
// menu
const menu = document.querySelector('#menu');
const overlay = document.querySelector('.overlay');


// get viewport width
let widthViewport = window.innerWidth || document.documentElement.clientWidth;
//  A cross-browser solution (using clientWidth and clientHeight for IE8 and earlier):

window.addEventListener('load', 
    function() { 
        if (widthViewport > 500)
            image.src = SLIDES[n].srcDesktop;
        else
            image.src = SLIDES[n].srcMobil;
    
}, false); 

// Menu controls
burguerIcon.addEventListener('click', showMenu);
closeIcon.addEventListener('click', hideMenu);


// Slide controls
leftArrow.addEventListener('click', prevSlide);
rightArrow.addEventListener('click', nextSlide);

// Slide functions
let n = 0;
function prevSlide(){
    if(SLIDES[n-1]){
        n -= 1;
        fillInfo();
    }
}


function nextSlide(){
    if(SLIDES[n+1]){
        n += 1;
        fillInfo();
    }
}

function fillInfo(){
    titleSlide.innerHTML = SLIDES[n].title;   
    textSlide.innerHTML = SLIDES[n].text;
    console.log(widthViewport);
    if (widthViewport > 500)
        image.src = SLIDES[n].srcDesktop;
    else
        image.src = SLIDES[n].srcMobil;
}


// Menu functions

function showMenu(){
    menu.classList.add('is-active')
    burguerIcon.classList.add('capas')
    overlay.classList.add('is-active')
}

function hideMenu(){
    menu.classList.remove('is-active');
    burguerIcon.classList.remove('capas')
    overlay.classList.remove('is-active')
}