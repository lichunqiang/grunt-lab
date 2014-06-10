#### Test Grunt-contrib-copy

> [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy) 项目地址

1. 准备package.json 文件

2. 安装grunt相关

```
$ npm install grunt --save-dev 

$ npm install grunt-contrib-copy --save-dev
```

请确保以上都已经ready
========= 

```
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
				src: '*', 
				dest: 'dest/',
				//flatten: true,
				//filter: 'isFile' //will only copy file not directory
			}
		}
    });

	grunt.loadNpmTasks('grunt-contrib-copy');
	
    grunt.registerTask('default', ['copy:main']); //this will do all work under cssmin option
	
};
```

理解src
=========
* 如果为 ``` * ``` 则只拷贝根目录的file或者dir, 不会继续深入
* 如果为 ``` ** ``` 则递归拷贝所有

flatten
=======

如果此项设置为true，则所有file和dir都被拷贝到目的地的根目录下
