module.exports = App.Tree = DS.Model.extend({
    name: DS.attr('string'),
    root: DS.hasMany('node', {async: true})
});

App.Tree.FIXTURES = [
    {
        id: 0,
        name: 'root',
        root: [0,1,2,3,4]
    }
];