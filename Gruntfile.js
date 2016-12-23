module.exports = function(grunt) {

  grunt.initConfig({
    copy: {
      bootstrap: {
        files: [{
          expand: true,
          cwd: 'node_modules/bootstrap',
          src: ['**'],
          dest: 'lib/bootstrap'
        }]
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: [
          {
            expand: true,
            cwd: 'lib/bootstrap/scss',
            src: 'bootstrap.scss',
            dest: 'css',
            ext: '.css'
          },
          {
            expand: true,
            cwd: 'sass',
            src: '**/*.scss',
            dest: 'css',
            ext: '.css'
          }
        ]
      }
    },
    watch: {
      files: ['lib/bootstrap/scss/**/*.scss','sass/*.scss'],
      tasks: ['sass']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default', ['sass']);

};
