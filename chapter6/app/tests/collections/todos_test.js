    'use strict';

    exports.todos = {
      setUp: function (done) {
        var data = require('../fixtures/todos');
        var Todos = require('../../app/js/collections/todos');

        this.todos = new Todos(data);
        done();
      },
      collection_has_model_of_todo: function (test) {
        var Todo = require('../../app/js/models/todo');
        test.equal(this.todos.model, Todo);
        test.done();
      },
      collection_can_filter_active_items: function (test) {
        test.equal(this.todos.activeItems().length, 2);
        test.done();
      },
      collection_can_filter_expired_items: function (test) {
        test.equal(this.todos.expiredItems().length, 1);
        test.done();
      }
    };
