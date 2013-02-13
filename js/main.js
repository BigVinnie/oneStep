
/*This is the IE backup for drop down menu*/
$(function() {
  if ($.browser.msie && $.browser.version.substr(0,1)<7)
  {
	$('li').has('ul').mouseover(function(){
		$(this).children('ul').css('visibility','visible');
		}).mouseout(function(){
		$(this).children('ul').css('visibility','hidden');
		})
  }
}); 

/* This is for Cart rollout*/
/*On click animate position  of cart to center andd if click again retuner to noraml position */

$cart = $('.containerStickyCart'),
$cartClick = $('.noCart');

$cartClick.click(function(){
	
	if($cart.css('right') === '-300px')
	{
		$cart.animate( {'right':'0'}, 500);
	} else {
		$cart.animate( {'right':'-300px'}, 500);
	}
});

$optionsButton = $('.optionsButton'),
$optionsList = $('.sidebarOptions ul');

$optionsButton.click(function(e) {

	e.preventDefault();

  	$optionsList.toggle( "blind", 500 );
});


/*=== main map functions ===*/

	//set the global vars.
	var currentIndex = -1 ,
		$marker = $(".plus"), 
		$boxTog = $(".infoCon");
		
	$($marker).click(function(){
	    var selectedIndex = $marker.index(this);
	    
	    $(this).toggleClass("rotate2");
	    var gramps = $(this).parent().parent();
	  	
	  	if(currentIndex != selectedIndex){
		  	
			$boxTog.eq(currentIndex).slideUp('2000',"swing").removeClass("active");
			$boxTog.eq(selectedIndex).slideDown('2000',"swing").addClass("active");
			currentIndex = selectedIndex;
	  	} else {
		  	$boxTog.eq(currentIndex).slideUp('2000',"swing").removeClass("active");
			currentIndex = -1;
	  	}
	    
	    if ( $(this).hasClass("rotate2") ) {
		
			$('.plus').not(this).each(function(){
	         $(this).removeClass("rotate2");

	         });
	     };
	});

	
/*=== rotate compas on mouse move ===*/	

	var img = $('.compas');
if(img.length > 0){
    var offset = img.offset();
    function mouse(evt){
        var center_x = (offset.left) + (img.width()/2);
        var center_y = (offset.top) + (img.height()/2);
        var mouse_x = evt.pageX; var mouse_y = evt.pageY;
        var radians = Math.atan2(mouse_x - center_x, mouse_y - center_y);
        var degree = (radians * (20 / Math.PI) * -2) +10; 
        img.css('-moz-transform', 'rotate('+degree+'deg)');
        img.css('-webkit-transform', 'rotate('+degree+'deg)');
        img.css('-o-transform', 'rotate('+degree+'deg)');
        img.css('-ms-transform', 'rotate('+degree+'deg)');
    }
    $(document).mousemove(mouse);
}

/*=== return compass to start ===*/	

$(window).mouseleave(function() {
	
	var degree = 0; 
	$(".compas").css('-webkit-transform', 'rotate('+degree+'deg)'),
					('-moz-transform', 'rotate('+degree+'deg)'),
					('-o-transform', 'rotate('+degree+'deg)'),
					('-ms-transform', 'rotate('+degree+'deg)') ;	
});

/*=== Home image hover ===*/	

$('.containerFeatured').hover(function() {  
	$('.captionOverlay').stop().animate({height:"50px"},200);
},
function() {$('.captionOverlay').stop().animate({height: "40px"},300);
});








