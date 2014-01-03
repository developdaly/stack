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
    imagemin: {
      png: {
        options: {
          optimizationLevel: 7
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: 'assets/img/',
            src: ['**/*.png'],
            // Could also match cwd line above. i.e. project-directory/img/
            dest: 'assets/img/compressed/',
            ext: '.png'
          }
        ]
      },
      jpg: {
        options: {
          progressive: true
        },
        files: [
          {
            // Set to true to enable the following options…
            expand: true,
            // cwd is 'current working directory'
            cwd: 'assets/img/',
            src: ['**/*.jpg'],
            // Could also match cwd. i.e. project-directory/img/
            dest: 'assets/img/compressed/',
            ext: '.jpg'
          }
        ]
      }
    },
    watch: {
      less: {
        files: [
          'assets/less/*.less',
          'assets/less/bootstrap-2.3.2/*.less'
        ],
        tasks: ['less']
      },
      js: {
        files: [
          '<%= jshint.all %>'
        ],
        tasks: ['jshint', 'uglify']
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
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // Register tasks
  grunt.registerTask('default', [
    'clean',
    'less',
    'uglify',
    'imagemin'
  ]);

  grunt.registerTask('dev', [
    'watch'
  ]);
};
