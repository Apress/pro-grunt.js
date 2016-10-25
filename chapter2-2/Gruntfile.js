module.exports = function(grunt) {

  var app_files = ['src/fileA.js', 'src/fileB.js'],
         output = 'dist/built.js',
    test_output = 'test/built.js';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    app_files: ['src/fileA.js', 'src/fileB.js'],
    output: 'dist/built.js',
    test_output: 'test/built.js',

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: app_files,
        dest: output
      },
      test: {
        options: {
          separator: '    ',
        },
        src: app_files,
        dest: test_output
      }
    }
  });

  // Load the plugin that provides the "concat" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
};