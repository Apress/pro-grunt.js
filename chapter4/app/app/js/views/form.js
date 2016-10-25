define(['backbone', 'js/template'], function(Backbone, Template) {
  return Backbone.View.extend({

    tagName: 'div',

    className: 'todo-form',

    template: Template["build/templates/form.hbs"],

    render: function() {
      var title = "Hello World!";
      this.$el.html(
        this.template({title: title})
      );
    }
  });
});
