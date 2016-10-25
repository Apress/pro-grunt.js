define(['backbone', 'js/models/todo'], function(Backbone, Todo) {
  return Backbone.Collection.extend({
    model: Todo
  });
});
