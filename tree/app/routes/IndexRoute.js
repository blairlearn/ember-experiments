'use strict';

module.exports = App.IndexRoute = Ember.Route.extend({
  model: function() {
    //return ['a','b','c'];
    return this.store.find('tree',0);
  }
});
