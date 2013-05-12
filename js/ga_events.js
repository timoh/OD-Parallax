/**
 * Bind DOM events to Google Analytics Events
 *   
 * Author: TH
 */

var exitLightbox; // make the function available outside

// On your marks, get set...
$(document).ready(function(){
	
	
	/* Send email with a custom subject, using window.location */
	var sendMail = function(subject) {
		if (subject.length < 3) {
			console.log("Email subject length too short!");
			return false;
		} else {
			var encodedURI = encodeURIComponent(subject);
			var outputToMAILTO = 'MAILTO:laitevuokraus@opendecks.fi?subject=' + encodedURI;
			window.location = outputToMAILTO;
		}
	};
						
	// Conversion events
	
		/* Handle conversion tracking */
		$('body').on("click", "#order-lightbox", function(event){
			event.preventDefault();
			ga('send', 'event', 'app', 'order', 'order-lightbox-open');
			
			// This one requires Visual Website Optimizer
	    if(typeof(_vis_opt_top_initialize) == "function") {
		     _vis_opt_goal_conversion(201);
		    _vis_opt_pause(500);
	    }
		});
		
		/* Logic of sending emails when user clicks the order button is handled here, consider refactoring! */

		$('body').on("click", "#order-send-email", function(event){
			event.preventDefault();
			var emailSubject = 'Open Decks Laitevuokraus // Tilaus: '+event.currentTarget.attributes[2].nodeValue;
			/* Open email client */
			sendMail(emailSubject);
			ga('send', 'event', 'app', 'order', 'order-send-email', event.currentTarget.attributes[4].nodeValue);
			
			$.get('conversion.html', function(data) {
				console.log('Thanks for your email!');
			});
			
			// This one requires Visual Website Optimizer
			if(typeof(_vis_opt_top_initialize) == "function") {
		    _vis_opt_register_conversion(1,1);
		  	_vis_opt_pause(500);
	    }
		});
		
		// User exits lightbox
		exitLightbox = function(){
			ga('send', 'event', 'app', 'lightbox', 'close');
		};
						
	// Navigation events					
						
	$('#nav-od').on('click', function() {
  	ga('send', 'event', 'navigation', 'click', 'nav-od');
	});
	
	$('#nav-perusasiat').on('click', function() {
  	ga('send', 'event', 'navigation', 'click', 'nav-perusasiat');
	});
	
	$('#nav-paketti1').on('click', function() {
  	ga('send', 'event', 'navigation', 'click', 'nav-paketti1');
	});
	
	$('#nav-paketti2').on('click', function() {
  	ga('send', 'event', 'navigation', 'click', 'nav-paketti2');
	});
	
	$('#nav-kaiuttimet').on('click', function() {
  	ga('send', 'event', 'navigation', 'click', 'nav-kaiuttimet');
	});
	
	$('#nav-levarit').on('click', function() {
  	ga('send', 'event', 'navigation', 'click', 'nav-levarit');
	});
	
	// Navigation in the app
	
		// TODO: Handling the navigation events in the app requires fiddling with Ember.js logic -- need to study this a bit more
	
	// Perusasiat
	
	$('#perusasiat-cutandslice').on('click', function() {
  	ga('send', 'event', 'perusasiat', 'ext-link-click', 'perusasiat-cutandslice');
	});
	
	$('#perusasiat-yhteydenotto').on('click', function() {
  	ga('send', 'event', 'perusasiat', 'yhteydenotto', 'perusasiat-yhteydenotto');
	});
	
	// Paketti 1
	
	$('#paketti1-tilaa').on('click', function() {
  	ga('send', 'event', 'paketti1', 'order', 'paketti1-tilaa');

		// This one requires Visual Website Optimizer
		if(typeof(_vis_opt_top_initialize) == "function") {
	     _vis_opt_goal_conversion(200);
	    _vis_opt_pause(500);
    }
	});
	
	// Paketti 2
	
	$('#paketti2-tilaa').on('click', function() {
  	ga('send', 'event', 'paketti2', 'order', 'paketti2-tilaa');

		// This one requires Visual Website Optimizer
		if(typeof(_vis_opt_top_initialize) == "function") {
	     _vis_opt_goal_conversion(200);
	    _vis_opt_pause(500);
    }
	});
	
	// Kaiuttimet
	
	$('#kaiuttimet-tilaa').on('click', function() {
  	ga('send', 'event', 'kaiuttimet', 'order', 'kaiuttimet-tilaa');

		// This one requires Visual Website Optimizer
		if(typeof(_vis_opt_top_initialize) == "function") {
	     _vis_opt_goal_conversion(200);
	    _vis_opt_pause(500);
    }
	});
	
	// Levarit
	
	$('#levarit-tilaa').on('click', function() {
  	ga('send', 'event', 'levarit', 'order', 'levarit-tilaa');

		// This one requires Visual Website Optimizer
		if(typeof(_vis_opt_top_initialize) == "function") {
	     _vis_opt_goal_conversion(200);
	    _vis_opt_pause(500);
    }
	});
	
	// Kysymyksiä?
	
	$('#kysymyksia-yhteydenotto').on('click', function() {
  	ga('send', 'event', 'kysymyksia', 'yhteydenotto', 'kysymyksia-yhteydenotto');
	});
	
	

}); // document ready
