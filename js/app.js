/* Add Fancybox Lightbox*/
$.fancybox.closeBtn = true;
$(document).ready(function() {
	$("#order-lightbox").fancybox({
		afterClose: function(){
			// this requires ga_events.js, where this function is defined!
			exitLightbox();
		}
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


/*
*
* LOGIC OF SENDING EMAILS IS CURRENTLY HANDLED IN ga_events.js
* CONSIDER REFACTORING!
*
*
*/

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
	price: DS.attr('string')
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
	photo_url: "images/photo2.png",
	description: "Paketti 1 sisältää kaiken tarvittavan isompiinkin bileisiin mukaanlukien äänentoistot, levysoittimet, mikserin, läppärin ja Seraton.",
	gear: [
		"2x RCF Art 312a -aktiivi-3-tiekaiutin",
		"2x Turbosound TXP-118 -aktiivisubwoofer",
		"2x Technics SL-1210mk2 -suoravetolevysoitin",
		"Rane TTM-56S -DJ-mikseri",
		"Serato Scratch Live SL1 -vinyyliemulaatiojärjestelmä",
		"Apple MacBook -läppäri",
		"Tarvittavat kaapelit",
		"Lisäksi halutessasi: dbx DriveRack DSP"
	],
	price: "399"
}, {
	id: '2',
	title: "Paketti 2",
	photo_url: "images/gear2-bg.png",
	description: "Paketti 2 on muuten sama kuin paketti 1, mutta se ei sisällä subbareita, läppäriä eikä Seratoa.",
	gear: [
		"2x RCF Art 312a -aktiivi-3-tiekaiutin",
		"2x Technics SL-1210mk2 -suoravetolevysoitin",
		"Rane TTM-56S -DJ-mikseri",
		"Tarvittavat kaapelit"
	],
	price: "200"
}, {
	id: '3',
	title: "Kaiuttimet",
	photo_url: "images/art312.png",
	description: "Ammattitason aktiiviset 3-tiekaiuttimet (2 x RCF:n Art 312a) ja niille jalustat ja tarvittavat kaapelit.",
	gear: [
		"2x RCF Art 312a -aktiivi-3-tiekaiutin",
		"Tarvittavat kaapelit"
	],
	price: "150"
}, {
	id: '4',
	title: "Levysoittimet ja dj-mikseri",
	photo_url: "images/tech12.png",
	description: "Legendaariset suoravetoiset DJ-levysoittimet (2 x Technics SL-1210mk2) ja DJ-mikseri (Rane TTM-56, 2-kanavainen battlemikseri, plugilähdöillä).",
	gear: [
		"2x Technics SL-1210mk2 -suoravetolevysoitin",
		"Rane TTM-56S -DJ-mikseri"
	],
	price: "150"
}
];