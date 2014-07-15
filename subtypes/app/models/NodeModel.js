'use strict';

module.exports = App.Node = DS.Model.extend({
    name: DS.attr('string'),
    subtree: DS.hasMany('node', {async: true} ),
    
    nodetype: DS.attr('string', {defaultValue: 'file'}),
    
    // meh. This doesn't seem to be useful.
    hasChildren: function() {
        return this.get('subtree');
    }.property('subtree')
});

App.Node.FIXTURES = [
    {
        id: 1,
        name: 'folder 1',
        nodetype: 'folder',
        subtree: [11]
    },
    {
        id: 11,
        name: 'folder 1.1',
        nodetype: 'file'
    },
    {
        id: 2,
        name: 'folder 2',
        nodetype: 'folder',
        subtree: [21,22,23]
    },
    {
        id: 21,
        name: 'folder 2.1'
    },
    {
        id: 22,
        name: 'folder 2.2',
        nodetype: 'folder',
        subtree: [221,222,223]
    },
    {
        id: 221,
        name: 'folder 2.2.1'
    },
    {
        id: 222,
        name: 'folder 2.2.2'
    },
    {
        id: 223,
        name: 'folder 2.2.3'
    },
    {
        id: 23,
        name: 'folder 2.3'
    },
    {
        id: 3,
        name: 'folder 3',
        nodetype: 'file',
        subtree: []
    }
];