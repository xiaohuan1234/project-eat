function getFormattedDate (date) {
    return date.getFullYear()
        + "-"
        + ("0" + (date.getMonth() + 1)).slice(-2)
        + "-"
        + ("0" + date.getDate()).slice(-2);
}

$(document).ready(function() {	
	
	
// address
	var autocomplete_lunch = new google.maps.places.Autocomplete($("#lunch_address")[0], {});
	google.maps.event.addListener(autocomplete_lunch, 'place_changed', function() {
		var place = autocomplete_lunch.getPlace();
		console.log(place.address_components);
		$("#dinner_address").val($("#lunch_address").val());
	});

// calendar	
var today = new Date();
var tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);

$("#theDate").val(getFormattedDate(today));
$("#theTomorrow").val(getFormattedDate(tomorrow));


$('h2').click(
	function() {
		$(this).css('background-color', '#ff0000');
	}
)

	$('.js--section-schedule').waypoint(function(direction) {
		if (direction == "down") {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}, {
		offset: '1px'
	})
		
/*navigation scroll*/
	
		// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
		// On-page links
		if (
		  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
		  && 
		  location.hostname == this.hostname
		) {
		  // Figure out element to scroll to
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
		  // Does a scroll target exist?
		  if (target.length) {
			// Only prevent default if animation is actually gonna happen
			event.preventDefault();
			$('html, body').animate({
			  scrollTop: target.offset().top-50
			}, 1000, function() {
			  // Callback after animation
			  // Must change focus!
			  var $target = $(target);
			  $target.focus();
			  if ($target.is(":focus")) { // Checking if the target was focused
				return false;
			  } else {
				$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
				$target.focus(); // Set focus again
			  };
			});
		  }
		}
	  });	

$(window).resize(function(){
    if($(window).width() > 768){        
      	$("#account-mobile").css("display", "none");
		$(".rotate").removeClass("down");		
	}
	else if ($(".collapsed")[0]) {
			$("#account-mobile").css("display", "block");
			$(".rotate").addClass("down");		
	}
});

	
$(".js--main-menu").click(function() {	
	$(".rotate").toggleClass("down");
	$("#account-mobile").slideToggle(500);
	$("#account-mobile").toggleClass("collapsed");
})


$('.js--cuisine').click(function() {		
	/*$('.js--cuisine-popup').css("display", "block");
	$('.js--cuisine-close').css("display", "block");	*/
	$('.js--cuisine-popup').slideToggle();
	$('.js--cuisine-close').slideToggle();
	$('.js--cuisine-reset').slideToggle();
	$('.js--cuisine-save').slideToggle();
})

$('.js--cuisine-close').click(function() {		
	$('.js--cuisine-popup').css("display", "none");	
	$('.js--cuisine-close').css("display", "none");
	$('.js--cuisine-reset').css("display", "none");
	$('.js--cuisine-save').css("display", "none");
})
	
$('.js--calendar').click(function() {		
	$('.js--calendar-popup').slideToggle();
	$('.js--calendar-close').slideToggle();
	$('.js--calendar-save').slideToggle();
})

$('.js--calendar-close').click(function() {		
	$('.js--calendar-popup').css("display", "none");	
	$('.js--calendar-close').css("display", "none");	
})

$('.js--address').click(function() {		
	$('.js--address-popup').slideToggle();
	$('.js--address-close').slideToggle();
	$('.js--address-save').slideToggle();
})

$('.js--address-close').click(function() {		
	$('.js--address-popup').css("display", "none");	
	$('.js--address-close').css("display", "none");	
})

$('.menu').hover(function() {
	jQuery(".date", this).toggle();
	jQuery(".meal-notes", this).toggle();
	
})

})