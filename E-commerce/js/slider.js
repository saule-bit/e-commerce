$('.slider-big').slick({
    lazyLoad: 'ondemand',
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: ".slider-min",
    draggable: false,
    swipe: false,
    fade: true,

  });

  $('.slider-min').slick({
    lazyLoad: 'ondemand',
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-big",
    touchMove: false,
    focusOnSelect: true
  });
  