/**
 * Bind DOM events to Google Analytics Events
 *   
 * Author: TH
 */

// On your marks, get set...
$(document).ready(function(){
						
						
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
	});
	
	// Paketti 2
	
	$('#paketti2-tilaa').on('click', function() {
  	ga('send', 'event', 'paketti2', 'order', 'paketti2-tilaa');
	});
	
	// Kaiuttimet
	
	$('#kaiuttimet-tilaa').on('click', function() {
  	ga('send', 'event', 'kaiuttimet', 'order', 'kaiuttimet-tilaa');
	});
	
	// Levarit
	
	$('#levarit-tilaa').on('click', function() {
  	ga('send', 'event', 'levarit', 'order', 'levarit-tilaa');
	});
	
	// Kysymyksiä?
	
	$('#kysymyksia-yhteydenotto').on('click', function() {
  	ga('send', 'event', 'kysymyksia', 'yhteydenotto', 'kysymyksia-yhteydenotto');
	});

}); // document ready
