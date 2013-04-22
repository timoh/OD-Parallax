/**
 * Smooth scrolling to anchor links
 *   
 * Author: http://alturl.com/saund
 */

// On your marks, get set...
$(document).ready(function(){
						
	// Select links with scrolla class
	$('.scrolla').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 250);
    return false;
	});

}); // document ready
