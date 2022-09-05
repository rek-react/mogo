$(document).ready(function () {

   // scroll
   const header = $('.header')
   const scroll = $(window).scrollTop()
   checkScroll(scroll)
   $(window).on('scroll', function () {
      const scroll = $(this).scrollTop()
      checkScroll(scroll)
   })

   function checkScroll(scroll) {
      if (scroll > 0) {
         header.addClass('fixed')
      } else {
         header.removeClass('fixed')
      }
   }

   // slick 
   $('.quote__body').slick({
      adaptiveHeight: true
   })


   //upIn
   const aceptionHeader = $('.aception__header[data-collapse]')
   $(aceptionHeader).next().hide()
   const text = $(aceptionHeader).data('collapse')
   $(text).slideDown()
   $(aceptionHeader).on('click', function () {
      const slideText = $(this).data('collapse')
      if (!($(this).hasClass('active'))) {
         $(this).addClass('active')
         $(slideText).slideDown()
      } else {
         $(this).removeClass('active')
         $(slideText).slideUp()
      }

   }
   )

   //menuBurg
   const menuBurg = $('.header__icon')
   const menu = $('.menu')
   $(menuBurg).on('click', function () {
      $(this).toggleClass('active')
      $(menu).toggleClass('active')
      $('body').toggleClass('lock')
   })

   //nav
   $($('[data-goto]')).on('click', function (event) {
      $('.menu__link').removeClass('active')
      $(this).addClass('active')

      const gotoBlock = $(this).data('goto')
      const gotoBlockValue = $(gotoBlock).offset().top - $('.header__body').height()

      if ($(menuBurg).hasClass('active')) {
         $(menuBurg).removeClass('active')
         $(menu).removeClass('active')
         $(search).removeClass('active')
         $('body').removeClass('lock')
      }

      $('html, body').stop().animate({
         scrollTop: gotoBlockValue
      }, 500)
      event.preventDefault()

   })

})