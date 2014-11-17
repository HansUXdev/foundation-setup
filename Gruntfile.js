module.exports = function(grunt) {
  // Initialize config.
  grunt.initConfig({
    pkg   : grunt.file.readJSON('package.json'),
    vendor: grunt.file.readJSON('.bowerrc').directory,

    config: {
      live: 'src',
      src: 'src',
      sass: 'src/scss/',
      css: '<%= site.dest %>/assets/css',      
      dist: '<%= site.dest %>',
      prod: 'www/',
      bootstrap: '<%= vendor %>/bootstrap/less',
      jquery: '<%= vendor %>/jquery',
      holder: '<%= vendor %>/holderjs',
      highlight: '<%= vendor %>/highlightjs',
      modernizr: '<%= vendor %>/modernizr'
    },

  });

  require('load-grunt-tasks')(grunt);

  grunt.loadTasks('grunt');

  // grunt.registerTask('sass', ['sass:production']);
  grunt.registerTask('clear',['clean']);

  grunt.registerTask('setup',['clean','shell:bower','copy:foundation','compass']);


  grunt.registerTask('default', ['connect','watch']);


};