define(['backbone'], function(Backbone) {
  'use strict';

  return Backbone.Model.extend({
    defaults: {
      'title': '',
      'date': '19/02/2015',
      'complete': false
    },

    complete: function () {
      this.set('complete', true);
    }
  });
});
