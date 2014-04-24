Todos.Router.map(function() {
  this.resource('todos', { path: '/' }, function() {
	// child routes to be named later.
	this.route('active');	// Automatically goes to TodosActiveRoute
	this.route('completed');// Automatically goes to TodosCompletedRoute
  });
});

// Returns all existing todos found in the model.
Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});

Todos.TodosIndexRoute = Ember.Route.extend({
  model: function() {
    return this.modelFor('todos');
  }
});

Todos.TodosActiveRoute = Ember.Route.extend({
  model: function(){
	// Return all todo items where the isCompleted property is false
    return this.store.filter('todo', function(todo) {
      return !todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});

Todos.TodosCompletedRoute = Ember.Route.extend({
  model: function(){
	// Return all todo items where the isCompleted property is true
    return this.store.filter('todo', function(todo) {
      return todo.get('isCompleted');
    });
  },
  renderTemplate: function(controller) {
    this.render('todos/index', {controller: controller});
  }
});