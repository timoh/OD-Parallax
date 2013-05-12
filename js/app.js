/* Add Fancybox Lightbox*/
$.fancybox.closeBtn = true;
$(document).ready(function() {
	$("#order-lightbox").fancybox();
});

/* Handle conversion tracking */
$('body').on("click", "#order-lightbox", function(event){
	event.preventDefault();
	
	/* TODO: SETUP event tracking! */
	
});

$('body').on("click", "#order-send-email", function(event){
	event.preventDefault();
	$.get('conversion.html', function(data) {
	  alert('Conversion was tracked.');
	});
});


/* Setup app */
App = Ember.Application.create();

App.Store = DS.Store.extend({
	revision: 12,
	adapter: DS.FixtureAdapter
	// adapter: DS.RESTAdapter.extend({
	// 		url: 'http://laitevuokraus.herokuapp.com',
	// 		dataType: 'json'
	// 	})
});

/* Actual logic code starts here */
App.Router.map(function() {
	this.resource('items', {path: '/'}, function(){
		this.resource('item', { path: ':item_id' });
	});
});

App.ItemsRoute = Ember.Route.extend({
	model: function(){
		return App.Item.find();
	}
});

App.Item = DS.Model.extend({
	title: DS.attr('string'),
	photo_url: DS.attr('string'),
	description: DS.attr('string'),
	gear: DS.attr('array'),
	price: DS.attr('string'),
	fb_conversion_pixel: DS.attr('string')
});


/* Helper for conversion urls */

Handlebars.registerHelper('conversionurl', function(object) {
  return new Handlebars.SafeString(
    "<a href='" + object + "'>"
  );
});


/* DATA STARTS HERE! */

App.Item.FIXTURES = [{
	id: '1',
	title: "Paketti 1",
	photo_url: "images/gear-bg.png",
	description: "Yolo!",
	gear: [
		"ZZZZO!",
		"EEEEEEEOOOOO"
	],
	price: "399",
	fb_conversion_pixel: "facebook.html"
}, {
	id: '2',
	title: "Paketti 2",
	photo_url: "images/art312.png",
	description: "SWAG!",
	gear: [
		"ZZZZO!",
		"EEEEEEEOOOOO"
	],
	price: "299",
	fb_conversion_pixel: "facebook.html"
}
];