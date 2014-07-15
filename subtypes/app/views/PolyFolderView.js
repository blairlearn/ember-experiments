'use strict';

module.exports = App.PolyFolderView = Ember.View.extend({
    tname: 'polyFolder',
    templateName: function(){
        return this.tname;
    }.property()
});