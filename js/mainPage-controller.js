$('.nav-btns a').click(function(){
    $('.nav-active').removeClass('nav-active');
    $(this).find('.main-page-border').addClass('nav-active');
    $(window).off('scroll');
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800, function(){
      $(window).on('scroll',scrollCallback);
    });
    return false;
});


$('.mobileMenu .item').click(function(){
    $(window).off('scroll');
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800, function(){
      $(window).on('scroll',scrollCallback);
    });
    return false;
});

$('.nav-btn').on('click',function(){
    $('.ui.vertical.menu').toggle();
});

$('.menu .item').tab();

$(window).on('scroll',scrollCallback);


function scrollCallback(){
  var currentScrollTop = $(window).scrollTop();
  var indexScrollTop = $('#index').offset().top;
  var workSetsScrollTop = $('#workSets').offset().top;
  var aboutUsScrollTop = $('#aboutUs').offset().top;
  var contactUsScrollTop = $('#contactUs').offset().top;

  if(currentScrollTop >= (indexScrollTop-20)){
    $('.nav-active').removeClass('nav-active');
    $('.nav-index').find('.main-page-border').addClass('nav-active');
  }
  if(currentScrollTop >= (workSetsScrollTop-20)){
    $('.nav-active').removeClass('nav-active');
    $('.nav-works').find('.main-page-border').addClass('nav-active');
  }
  if(currentScrollTop >= (aboutUsScrollTop-20)){
    $('.nav-active').removeClass('nav-active');
    $('.nav-about').find('.main-page-border').addClass('nav-active');
  }
  if(currentScrollTop >= (contactUsScrollTop-20)){
    $('.nav-active').removeClass('nav-active');
    $('.nav-contact').find('.main-page-border').addClass('nav-active');
  }

}