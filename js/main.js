$(function(){
$('popup__link').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removeDelay: 160,
  preloader: false,
  fixidContentPos:false
});
$('.gallery__slider').slick({
  prevArrow: '<button type="button" class=" slick-btn slick-prev"><img src="./images/arrow-left.svg" alt="prev"></button>',
  nextArrow: '<button type="button" class=" slick-btn slick-next"><img src="./images/arrow-right.svg" alt="next"></button>',
});
$('.gallery__item-inner').magnificPopup({
  delegate: 'a',
  type: 'image',
  tLoading: 'Loading image #%curr%...',
  mainClass:'mfp-img-mobile',
  gallery:{
    enabled:true,
    navigateByImgClick:true,
    preload:[0,1]
  },
});
//menu-adaptive
$('.menu__btn').on('click', function(){
  $('.menu__list').toggleClass('menu__list--active');
});

});