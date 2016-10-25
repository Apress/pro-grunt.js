    define([
      'app/js/models/todo'
    ], function(Todo) {

      describe('A todo item', function() {
        'use strict';

        var todo;

        beforeEach(function() {
          todo = new Todo({
            'title': 'Test Item',
            'date': '24/02/2014'
          });
        });

        it('should have a title', function() {
          expect(todo.get('title')).toBe('Test Item');
        });

        it('should not be complete', function() {
          expect(todo.get('complete')).toBe(false);
        });

        it('should be marked as completed', function() {
          todo.complete();
          expect(todo.get('complete')).toBe(true);
        });

      });
    });
