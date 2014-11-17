module.exports = function(grunt) {

  grunt.config('concurrent', {
	  dev: ['connect:option','connect:dev'],
	  copy: ['copy:foundation','copy:src'],
	  prod: ['copy:foundation','copy:prod'],
	  assets: ['copy:jquery', 'copy:holder', 'copy:highlight', 'copy:modernizr'],
  });


};
