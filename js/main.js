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
});