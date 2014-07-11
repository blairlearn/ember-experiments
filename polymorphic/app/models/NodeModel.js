'use strict';

module.exports = App.Node = DS.Model.extend({
    name: DS.attr('string'),
    subtree: DS.hasMany('node', {async: true} )
});

App.Node.FIXTURES = [
    {
        id: 1,
        name: 'folder 1',
        subtree: [11]
    },
    {
        id: 11,
        name: 'folder 1.1'
    },
    {
        id: 2,
        name: 'folder 2',
        subtree: [21,22,23]
    },
    {
        id: 21,
        name: 'folder 2.1'
    },
    {
        id: 22,
        name: 'folder 2.2'
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
        subtree: []
    },
    {
        id: 4,
        name: 'folder 4',
        subtree: []
    },
    {
        id: 5,
        name: 'folder 5',
        subtree: [51]
    },
    {
        id: 51,
        name: 'folder 5.1'    },
    {
        id: 6,
        name: 'folder 6',
        subtree: [61]
    },
    {
        id: 61,
        name: 'folder 6.1'
    }
];