module.exports = function (grunt) {

    grunt.initConfig({
        pkg : grunt.file.readJSON("package.json"),

		copy: {
			options: {
				nonull: true //throw error info when file or directory is not found
			},
			main: {
				expand: true,
				cwd: 'src/',
				src: '**', 
				dest: 'dest/',
				//flatten: true
				//filter: 'isFile' //will only copy file not directory
			}
		}
    });

	grunt.loadNpmTasks('grunt-contrib-copy');
	
    grunt.registerTask('default', ['copy:main']); //this will do all work under cssmin option
	
};