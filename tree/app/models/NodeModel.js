'use strict';

module.exports = App.Node = DS.Model.extend({
    name: DS.attr('string'),
    subtree: DS.hasMany('sub')
});

App.Node.FIXTURES = [
    {
        id: 0,
        name: 'folder 1',
        subtree: [11]
    },
    {
        id: 1,
        name: 'folder 2',
        subtree: []
    },
    {
        id: 2,
        name: 'folder 3',
        subtree: []
    },
    {
        id: 3,
        name: 'folder 4',
        subtree: []
    },
    {
        id: 4,
        name: 'folder 5',
        subtree: []
    }
];