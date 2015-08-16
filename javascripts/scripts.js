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
  if (isiPhone()){
    $('.btn-flat').hover(function() {
    	var $parent = jQuery(this);
    	var $dropdown = $parent.children('ul');

    	$dropdown.show(0,function() {
    		$parent.mouseleave(function() {
    			var $this = jQuery(this);
    			$this.children('ul').fadeOut(10);
    		});
    	});
    });
  }
});
