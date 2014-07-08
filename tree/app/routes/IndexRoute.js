'use strict';

module.exports = App.IndexRoute = Ember.Route.extend({
  model: function() {
    //return ['a','b','c'];
    //return this.store.find('tree',0);
    return {
        root: [
            {name: 'foo 1', subtree:[{name: "foo 1.1"}]},
            {name: 'foo 2',
            subtree:
                    [
                {name: "foo 2.1"},
                {name: "foo 2.2",
                    subtree:[
                        {name: "foo 2.2.1"},
                        {name: "foo 2.2.2"},
                        {name: "foo 2.2.3"}
                    ]
                },
                {name: "foo 2.3"}
            ]
            },
            {name: 'foo 3'},
            {name: 'foo 4'},
            {name: 'foo 5', subtree:[{name: "foo 5.1"}]},
            {name: 'foo 6', subtree:[{name: "foo 6.1"}]}
        ]
    };
  }
});
