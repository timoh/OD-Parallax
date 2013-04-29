/**
 * Bind DOM events to Google Analytics Events
 *   
 * Author: TH
 */

// On your marks, get set...
$(document).ready(function(){
						
						
	// Navigation events					
						
	$('#nav-id').on('click', function() {
  	ga('send', 'event', 'link', 'click', 'nav-od');
	});
	
	$('#nav-perusasiat').on('click', function() {
  	ga('send', 'event', 'link', 'click', 'nav-perusasiat');
	});
	
	$('#nav-paketti1').on('click', function() {
  	ga('send', 'event', 'link', 'click', 'nav-paketti1');
	});
	
	$('#nav-paketti2').on('click', function() {
  	ga('send', 'event', 'link', 'click', 'nav-paketti2');
	});
	
	$('#nav-kaiuttimet').on('click', function() {
  	ga('send', 'event', 'link', 'click', 'nav-kaiuttimet');
	});
	
	$('#nav-levarit').on('click', function() {
  	ga('send', 'event', 'link', 'click', 'nav-levarit');
	});
	
	// Perusasiat
	
	$('#perusasiat-cutandslice').on('click', function() {
  	ga('send', 'event', 'link', 'click', 'perusasiat-cutandslice');
	});
	
	$('#perusasiat-yhteydenotto').on('click', function() {
  	ga('send', 'event', 'link', 'click', 'perusasiat-yhteydenotto');
	});
	
	// Paketti 1
	
	$('#paketti1-tilaa').on('click', function() {
  	ga('send', 'event', 'link', 'click', 'paketti1-tilaa');
	});
	
	// Paketti 2
	
	$('#paketti2-tilaa').on('click', function() {
  	ga('send', 'event', 'link', 'click', 'paketti2-tilaa');
	});
	
	// Kaiuttimet
	
	$('#kaiuttimet-tilaa').on('click', function() {
  	ga('send', 'event', 'link', 'click', 'kaiuttimet-tilaa');
	});
	
	// Levarit
	
	$('#levarit-tilaa').on('click', function() {
  	ga('send', 'event', 'link', 'click', 'levarit-tilaa');
	});
	
	// Kysymyksiä?
	
	$('#kysymyksia-yhteydenotto').on('click', function() {
  	ga('send', 'event', 'link', 'click', 'kysymyksia-yhteydenotto');
	});

}); // document ready
