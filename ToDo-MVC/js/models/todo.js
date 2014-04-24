Todos.Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});

Todos.Todo.FIXTURES = [
  {
    id: 1,
    title: 'Learn Ember.js',
    isCompleted: true
  },
  {
    id: 2,
    title: '...',
    isCompleted: false
  },
  {
      id: 5,
      title: 'Three sir!',
      isComplete: false
  },
  {
    id: 4,
    title: 'Doo-wah-ditty',
    isCompleted: true
  },
  {
    id: 3,
    title: 'Profit!',
    isCompleted: false
  }
];
