'use strict';
module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'assets/js/*.js',
        '!assets/js/scripts.min.js'
      ]
    },
    less: {
      dist: {
        files: {
          'assets/css/main.min.css': [
            'assets/less/app.less'
          ]
        },
        options: {
          compress: true
        }
      }
    },
    uglify: {
      dist: {
        files: {
          'assets/js/scripts.min.js': [
            'assets/js/vendor/bootstrap/bootstrap-transition.js',
            'assets/js/vendor/bootstrap/bootstrap-alert.js',
            'assets/js/vendor/bootstrap/bootstrap-button.js',
            'assets/js/vendor/bootstrap/bootstrap-carousel.js',
            'assets/js/vendor/bootstrap/bootstrap-collapse.js',
            'assets/js/vendor/bootstrap/bootstrap-dropdown.js',
            'assets/js/vendor/bootstrap/bootstrap-modal.js',
            'assets/js/vendor/bootstrap/bootstrap-tooltip.js',
            'assets/js/vendor/bootstrap/bootstrap-popover.js',
            'assets/js/vendor/bootstrap/bootstrap-scrollspy.js',
            'assets/js/vendor/bootstrap/bootstrap-tab.js',
            'assets/js/vendor/bootstrap/bootstrap-affix.js',
            'assets/js/vendor/*.js',
            'assets/js/_*.js'
          ]
        }
      }
    },
    watch: {
      less: {
        files: [
          'assets/less/*.less',
          'assets/less/bootstrap-2.3.2/*.less'
        ],
        tasks: ['less', 'version']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'uglify', 'version']
      },
      livereload: {
        // Browser live reloading
        // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
        options: {
          livereload: false
        },
        files: [
          'assets/css/main.min.css',
          'assets/js/scripts.min.js'
        ]
      }
    },
    clean: {
      dist: [
        'assets/css/main.min.css',
        'assets/js/scripts.min.js'
      ]
    }
  });

  // Load tasks
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'less',
    'uglify'
  ]);
  grunt.registerTask('dev', [
    'watch'
  ]);

};