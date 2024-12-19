'use strict';

const classList = document.querySelector('.class-list');
let isPaused = false;

classList.addEventListener('mouseover', () => {
  isPaused = true;
  classList.style.animationPlayState = 'paused';
});

classList.addEventListener('mouseout', () => {
  isPaused = false;
  classList.style.animationPlayState = 'running';
});

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const toggleNavbar = function () { navbar.classList.toggle("active"); }

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () { navbar.classList.remove("active"); }

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header & back top btn active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



$(()=>
  {
      
  
      //Ad Slider 
      $('.carousel').flickity({
          //option 
          cellAlign:'left',
          contain: true,
          freeScroll:false,
          autoPlay:1500,
          pageDots: false
      })
      //Category Slider 
      $('.category-flick .carousel').flickity({
          //option 
          cellAlign:'left',
          contain: true,
          freeScroll:true
      })
      $('.category-flick .carousel').each(function() {
          if ($(this).find('div.carousel-cell').length >= 1) {
            $(this).find('button.flickity-prev-next-button.previous, button.flickity-prev-next-button.next, ol.flickity-page-dots').hide();
          }
        });
      $('.cat-prev').on('click',function()
      {
          $('.category-flick .carousel').flickity('previous')
      })
      $('.cat-next').on('click',function()
      {
          $('.category-flick .carousel').flickity('next')
      })
      //Brand Slider 
      $('.brand-flick .carousel').flickity({
          //option 
          cellAlign:'left',
          contain: true,
          freeScroll:true
      })
      $('.brand-flick .carousel').each(function() {
          if ($(this).find('div.carousel-cell').length >= 1) {
            $(this).find('button.flickity-prev-next-button.previous, button.flickity-prev-next-button.next, ol.flickity-page-dots').hide();
          }
        });
      $('.brand-prev').on('click',function()
      {
          $('.brand-flick .carousel').flickity('previous')
      })
      $('.brand-next').on('click',function()
      {
          $('.brand-flick .carousel').flickity('next')
      })
      //Pupular Slider
      $('.pop-flick .carousel').flickity({
          //option 
          cellAlign:'left',
          contain: true,
          freeScroll:true
      })
      $('.pop-flick .carousel').each(function() {
          if ($(this).find('div.carousel-cell').length >= 1) {
            $(this).find('button.flickity-prev-next-button.previous, button.flickity-prev-next-button.next, ol.flickity-page-dots').hide();
          }
        });
      $('.pop-prev').on('click',function()
      {
          $('.pop-flick .carousel').flickity('previous')
      })
      $('.pop-next').on('click',function()
      {
          $('.pop-flick .carousel').flickity('next')
      })
       //New Arrieved Slider
       $('.arv-flick .carousel').flickity({
          //option 
          cellAlign:'left',
          contain: true,
          freeScroll:true
      })
      $('.arv-flick .carousel').each(function() {
          if ($(this).find('div.carousel-cell').length >= 1) {
            $(this).find('button.flickity-prev-next-button.previous, button.flickity-prev-next-button.next, ol.flickity-page-dots').hide();
          }
        });
      $('.arv-prev').on('click',function()
      {
          $('.arv-flick .carousel').flickity('previous')
      })
      $('.arv-next').on('click',function()
      {
          $('.arv-flick .carousel').flickity('next')
      })
      
      // Back To Top Button
  
      $(window).scroll(()=>
      {
          if($(this).scrollTop())
          {
              $('.backtotop ').fadeIn()
          }
          else
          {
              $('.backtotop ').fadeOut()
          }
      })
      $('.backtotop').click(()=>
      {
          $('html, body').animate(
              {
                  scrollTop:0
              },1000
          )
      })
  })