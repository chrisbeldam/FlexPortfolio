$(document).ready(function() {
  
    $('.item-info').hide()
  
    $('.item1').mouseenter(function() {
      $(this).find('.item-info1').fadeIn(100);
      $(this).css("cursor", "pointer");
    });
  
    $('.item1').mouseleave(function() {
      $(this).find('.item-info1').fadeOut(100)
    });
  
  });
