/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'app/css/main.css': 'build/styles/main.scss'
        }
      }
    },

    bowerInstall: {
      dist: {
        src: ['app/**/*.html'],
        dependencies: true,
        devDependencies: true,
        exclude: []
      }
    },

    recess: {
      dist: {
        options: {
          compile: false,
          noIDs: true
        },
        files: {
          'src': 'app/css/**/*.css',
        }
      }
    },

    autoprefixer: {
      dist: {
        src: 'app/css/main.css',
      },
    },

    cssmin: {
      dist: {
        options: {
          report: 'gzip'
        },
        files: {
          'dist/css/main.css': 'app/css/main.css'
        }
      }
    },

    uncss: {
      dist: {
        files: {
          'app/css/main.css': ['app/index.html']
        }
      }
    },

    copy: {
      dist: {
        expand: true,
        cwd: 'app/',
        src: 'index.html',
        dest: 'dist/'
      }
    },

    useminPrepare: {
      dist: {
        src: 'app/index.html',
        dest: 'dist/'
      }
    },

    usemin: {
      html: 'dist/index.html'
    },

    rev: {
      dist: {
        src: 'dist/css/main.css'
      }
    }

  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-bower-install');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-rev');

  // Default task.
  grunt.registerTask('default', [
    'useminPrepare',
    'sass',
    'bowerInstall',
    'autoprefixer',
    'recess',
    'uncss',
    'copy',
    'cssmin',
    'rev',
    'usemin'
  ]);

};
