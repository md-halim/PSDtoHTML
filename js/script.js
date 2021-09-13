$(function(){
    
   //lightbox js
    $('.venobox').venobox({
        spinner : 'wave',
        spinColor :'#02918c',
        arrowsColor:'#02918c'
    });
    
    //about slider
    
    $('.about_slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
        dots:true,
        arrows:false,
      autoplay: true,
        infinite:true,
        speed: 1000,
      autoplaySpeed: 5000,
    });
    
});