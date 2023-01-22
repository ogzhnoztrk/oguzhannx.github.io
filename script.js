$('ul li').click(function(e) {
  e.preventDefault();
  $('ul li').removeClass('active');
  $(this).addClass('active');
   $('ul a').click(function(e){
    window.location=$(this).attr('href');
   })
})
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
