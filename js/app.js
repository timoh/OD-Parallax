App = Ember.Application.create();

App.Router.map(function() {
	this.resource('items', function(){
		this.resource('item', { path: ':item_id' });
	});
});

App.ItemsRoute = Ember.Route.extend({
	model: function(){
		return App.Item.find();
	}
});

App.Store = DS.Store.extend({
	revision: 12,
	adapter: DS.FixtureAdapter
	// adapter: DS.RESTAdapter.extend({
	// 		url: 'http://laitevuokraus.herokuapp.com',
	// 		dataType: 'json'
	// 	})
});

App.Item = DS.Model.extend({
	title: DS.attr('string'),
	photo_url: DS.attr('string'),
	description: DS.attr('string'),
	gear: DS.attr('array'),
	price: DS.attr('string'),
	fb_conversion_pixel: DS.attr('string')
});

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