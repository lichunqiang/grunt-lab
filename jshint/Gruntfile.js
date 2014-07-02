module.exports = function (grunt) {

    grunt.initConfig({
        pkg : grunt.file.readJSON("package.json"),

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['Gruntfile.js', 'test/**.js']
        }
    });

	grunt.loadNpmTasks('grunt-contrib-jshint');
	
    grunt.registerTask('default', ['jshint:all']); //this will do all work under jshint option
	
};