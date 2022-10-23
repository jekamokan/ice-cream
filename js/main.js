$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        slidesToShow: 1,
        arrows: false,
        infinite: true,
        asNavFor: '.sliders__photo',
        fade: true,
        autoplay: true,
        autoplaySpeed: 2500,
  });

  $('.sliders__photo').slick({
        slidesToShow: 1,
        arrows: false,
        infinite: true,
        fade: true,
        asNavFor: '.slider',
        autoplay: true,
        autoplaySpeed: 2500,
  });
      
      $('.header__btn').click(function (event) {
      $('.popupone').addClass('popupone__active');
      })
      $('.header__btn').click(function (event) {
      $('.popupone__buy-body').addClass('popupone__animation');
      })
      $('.popupone__buy-cross').click(function (event) {
      $('.popupone').removeClass('popupone__active');
      })
      
      
      $('.products__item-link').click(function (event) {
      $('.popuptwo').addClass('popuptwo__active');
      })
      $('.products__item-link').click(function (event) {
      $('.popuptwo__body').addClass('popuptwo__animation');
      })
      $('.popuptwo__cross').click(function (event) {
      $('.popuptwo').removeClass('popuptwo__active');
       })

      $('.tradition__btn').click(function (event) {
      $('.popupthree').addClass('popupthree__active');
      })
      $('.tradition__btn').click(function (event) {
      $('.popupthree__body').addClass('popupthree__animation');
      })
      $('.popupthree__cross').click(function (event) {
      $('.popupthree').removeClass('popupthree__active');
      })
    
      $('.geo__btn-locations').click(function (event) {
      $('.popupfour').addClass('popupfour__active');
      })
      $('.geo__btn-locations').click(function (event) {
      $('.popupfour__body').addClass('popupfour__animation');
      })
      $('.popupfour__cross').click(function (event) {
      $('.popupfour').removeClass('popupfour__active');
       })

      $('.geo__btn-franchise').click(function (event) {
      $('.popupfive').addClass('popupfive__active');
      })
      $('.geo__btn-franchise').click(function (event) {
      $('.popupfive__body').addClass('popupfive__animation');
      })
      $('.popupfive__cross').click(function (event) {
      $('.popupfive').removeClass('popupfive__active');
       })
});



