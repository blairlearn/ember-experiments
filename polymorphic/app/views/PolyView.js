module.exports = App.PolyView = Ember.View.extend({
    name: 'poly',
    templateName: function() {
        if( this.node.get('nodetype') == 'folder' )
            return 'node-with-children';
        else
            return 'node-without-children';
    }.property('node')
});