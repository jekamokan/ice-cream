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
      $('.popuptwo__cross').click(function (event) {
      $('.popuptwo').removeClass('popuptwo__active');
       })
});



products__item-link