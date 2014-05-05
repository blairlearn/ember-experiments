App.Dictionary = DS.Model.extend({
    title: DS.attr("string")
});

App.Dictionary.FIXTURES = [
    {
        id: 0,
        title: "Hello Ember"
    }
];