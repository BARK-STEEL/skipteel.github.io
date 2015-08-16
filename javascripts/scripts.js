$(document).ready(function(){
  function isiPhone(){
      return (
          //Detect iPhone
      //var isiPad = navigator.userAgent.match(/iPad/i) != null;
          (navigator.platform.indexOf("iPhone") != -1) ||
          //Detect iPod
          (navigator.platform.indexOf("iPad") != -1)
      );
  }
  $('.parallax').parallax();
  $('.slider').slider({full_width: true});
  // if (isiPhone()){
  //   $('.btn-flat').attr('data-hover', 'false');
  //   $('.btn-flat').on('mouseover', function(){
  //     $('#dropdown1').css({display:'none'});
  //   });
  //   $('.btn-flat').on('mouseover', function(){
  //     $('#dropdown3').css({display:'none'});
  //   });
  // }
});
