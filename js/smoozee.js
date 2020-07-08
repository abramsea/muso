$(window).scroll(function() {
    $('.smooth').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+470) {
        $(this).css('background','#f1f1f1');
      }
    });
});

$(window).scroll(function() {
    $('.smooth-black').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+470) {
        $(this).css('background','#000');
        $(this).css('color','#fff');
      }
    });
});