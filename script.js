$(function(){
  $(window).scroll(function(){
    
    if($(this).scrollTop()>=50){
     $('nav').addClass('nav-active');
      
        // instead of alert you can use to show your ad
        // something like $('#footAd').slideup();
    }
    if($(this).scrollTop()<150){
     $('nav').removeClass('nav-active');
      
        // instead of alert you can use to show your ad
        // something like $('#footAd').slideup();
    }
  });
});
