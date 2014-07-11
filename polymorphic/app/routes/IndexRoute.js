'use strict';

module.exports = App.IndexRoute = Ember.Route.extend({
  model: function() {
    //return ['a','b','c'];
    var retval = this.store.find('zaboop',0);
    return retval;
  }
});
