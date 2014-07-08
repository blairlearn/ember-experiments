'use strict';

module.exports = App.Sub = DS.Model.extend({
    name: DS.attr('string')
});

App.Sub.FIXTURES = [
    {
        id: 11,
        name: 'folder 1.1'
    },
    {
        id: 12,
        name: 'folder 1.2'
    }
];