/*global Backbone, jQuery, _, ENTER_KEY, ESC_KEY */
var app = app || {};

(function($) {
	'use strict';

	app.ExperimentView = Backbone.View.extend({
		el : '.packetapp',

		events : {
			'click #submitBtn' : 'authenticate'
		},
		authenticate : function() {
			var loginInfo = {
				"email" : document.getElementById("inputEmail").value,
				"password" : document.getElementById("inputPassword").value
			}
			/*this.render();*/
			window.location.href ="login";
			$.ajax({
				type : "POST",
				contentType : 'application/json; charset=utf-8',
				dataType : 'json',
				url : "/protocolanalyzer/login",
				data : JSON.stringify(loginInfo), // Note it is important
				success : function(result) {
					this.render();
				}
			});
		},

		initialize : function() {
			/* this.render(); */
		},

		// Re-render the titles of the todo item.
		render : function() {
			// Backbone LocalStorage is adding `id` attribute instantly after
			// creating a model. This causes our TodoView to render twice. Once
			// after creating a model and once on `id` change. We want to
			// filter out the second redundant render, which is caused by this
			// `id` change. It's known Backbone LocalStorage bug, therefore
			// we've to create a workaround.
			// https://github.com/tastejs/todomvc/issues/469
			// if (this.model.changed.id !== undefined) {
			// return;
			// }

	        window.location.href ="experiment";
			/*var template = _.template($("#experiment-template").html(), {});
			this.$el.html(template);*/
			return this;
			// this.$el.html(this.template(this.model.toJSON()));
			// return this;
		}
	});
})(jQuery);
