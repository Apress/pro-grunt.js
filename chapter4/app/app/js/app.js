define([
  'js/collections/todos',
  'js/views/form',
  'js/views/todo-item'
  ], function(Collection, FormView, TodoView) {

  var initialize = function() {
    console.log('app.init');
    var todos = new Collection();
    new FormView().render();
    new TodoView(todos).render();
    /*@csstransforms3d*/
    if (Modernizr.localstorage) {
      var item = localStorage.getItem("favourite");
    }
  };

  return {
    init: initialize
  };
});
