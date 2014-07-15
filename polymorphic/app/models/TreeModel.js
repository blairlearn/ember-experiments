module.exports = App.Zaboop = DS.Model.extend({
    name: DS.attr('string'),
    root: DS.hasMany('node', {async: true})
});

App.Zaboop.FIXTURES = [
    {
        id: 0,
        name: 'root',
        root: [1,2,3]
    }
];