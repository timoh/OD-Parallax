/**
 * Ping to wake up the Heroku free dyno
 *   
 * Author: TH
 */

// On your marks, get set...
$(document).ready(function(){
						
	// Ping the Heroku service to wake up the dyno
	$.ajax('http://laitevuokraus.herokuapp.com/');

}); // document ready
