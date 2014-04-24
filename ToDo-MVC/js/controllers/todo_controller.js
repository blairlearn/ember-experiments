/* This is the controller for an individual TODO item.
   The naming kind of sucks, because the controller for the overall LIST
   of TODO item is called TodosController.  This seems to be the result
   of a really poor choice of names in the example, calling the template
   for the lists todos and individaul items todo.
*/
Todos.TodoController = Ember.ObjectController.extend({
  isCompleted: function(key, value){
    var model = this.get('model');

    if (value === undefined) {
      // property being used as a getter
      return model.get('isCompleted');
    } else {
      // property being used as a setter
      model.set('isCompleted', value);
      model.save();
      return value;
    }
  }.property('model.isCompleted'),
  
	actions: {
	  editTodo: function() {
		this.set('isEditing', true);
	  },

	  removeTodo: function() {
		var todo = this.get('model');
		todo.deleteRecord();
		todo.save();
	  },

	  acceptChanges: function() {
		this.set('isEditing', false);

		if (Ember.isEmpty(this.get('model.title'))) {
		  this.send('removeTodo');
		} else {
		  this.get('model').save();
		}
	  }
	},

	isEditing: false
});
