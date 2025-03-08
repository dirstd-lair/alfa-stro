$('.burger-menu').on('click', function() {
  if ($('.burger-menu').hasClass('open')) {
    $('.burger-menu').addClass('close')
    $('.burger-menu').removeClass('open')

    $('.burger').addClass('close')
    $('.burger').removeClass('open')
  }
  else {
    $('.burger-menu').addClass('open')
    $('.burger-menu').removeClass('close')

    $('.burger').addClass('open')
    $('.burger').removeClass('close')
  }
 
})

function is_fully_shown(target) {
  var wt = $(window).scrollTop(); 
  var wh = $(window).height();    
  var eh = $(target).height();  
  var et = $(target).offset().top;
 
  if (et >= wt && et + eh <= wh + wt){
    return true;
  } else {
    return false;    
  }
}

$(window).scroll(function(){
  $('.title-animated-p').each(function(){
    if (is_fully_shown($(this))) {
      $('.title-animated-p')
    }
  });
});