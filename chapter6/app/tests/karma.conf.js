    'use strict';

    module.exports = function(config) {
      config.set({
        files: [
          'tests/main.js',
          {pattern: 'app/js/**/*.js', included: false},
          {pattern: 'app/bower_components/**/*.js', included: false},
          {pattern: 'tests/specs/**/*.js', included: false},
          {pattern: 'tests/fixtures/**/*.js', included: false}
        ],
        basePath: '../',
        frameworks: ['jasmine', 'requirejs'],
        reporters: ['progress'],

        runnerPort: 9000,
        singleRun: false,
        browsers: ['PhantomJS', 'Firefox'],
        logLevel: 'ERROR'
      });
    };
