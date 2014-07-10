'use strict';

module.exports = App.Node = DS.Model.extend({
    name: DS.attr('string'),
    number: DS.attr('number'),
    children: DS.hasMany('subNode', {async: true} )
});

App.Node.FIXTURES = [
    {
        id: 0,
        name: 'folder 1',
        children: []
    },
    {
        id: 1,
        name: 'folder 2',
        children: [0,1]
    },
    {
        id: 2,
        name: 'folder 3',
        children: []
    },
    {
        id: 3,
        name: 'folder 4',
        children: []
    },
    {
        id: 4,
        name: 'folder 5',
        children: []
    }
];