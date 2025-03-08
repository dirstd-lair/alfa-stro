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