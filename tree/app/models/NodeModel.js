'use strict';

module.exports = App.Node = DS.Model.extend({
    name: DS.attr('string'),
    number: DS.attr('number')
});

App.Node.FIXTURES = [
    {
        id: 0,
        name: 'folder 1',
        number: 3.14    // Almost pi.
    },
    {
        id: 1,
        name: 'folder 2',
        number: 42      // The answer
    },
    {
        id: 2,
        name: 'folder 3',
        number: 86      // Agent of Control
    },
    {
        id: 3,
        name: 'folder 4',
        number: 99      // Agent of Control
    },
    {
        id: 4,
        name: 'folder 5',
        number: 9       // You say you want a revolution.
    }
];