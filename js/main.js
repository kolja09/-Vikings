$(function(){
  $('.header__burger').click(function(){
    $('.header__burger,.menu__list').toggleClass('active')
    $('body').toggleClass('lock')
  });

  
 $('.heroes__slider-img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.heroes__slider-text',
  prevArrow:'<button  class="slick-btn slick-prev"><img src="images/arrow-left.png"></button>',
  nextArrow:'<button  class="slick-btn slick-next"><img src="images/arrow-right.png"></button>',
  responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows:false,

      }
    }
  ]
});

$('.heroes__slider-text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.heroes__slider-img',
  fade: true,
  arrows:false
});

});