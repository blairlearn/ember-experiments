App.Router.map(function() {
});

// List of letters for atoz list.
App.IndexRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('dictionary', 0);
    }
});
