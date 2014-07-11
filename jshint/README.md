#### Test Grunt-contrib-copy

> [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint) 项目地址

1. 准备package.json 文件

2. 安装grunt相关

```
$ npm install grunt --save-dev 

$ npm install grunt-contrib-jshint --save-dev
```

请确保以上都已经ready
========= 

```
module.exports = function (grunt) {

    grunt.initConfig({
        pkg : grunt.file.readJSON("package.json"),

        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: ['Gruntfile.js', 'js/*.js']
        }
    });

	grunt.loadNpmTasks('grunt-contrib-jshint');
	
    grunt.registerTask('default', ['jshint:all']); //this will do all work under jshint option
	
};
```

#### jshintrc

* 类型：```Object```或者```true``
* 默认值：```null```

设置为 ```true``` 就表示没有给 ```jshint``` 传递配置信息，并且 ```jshint``` 会自动相对于要检测的文件来搜索 ```.jshintrc``` 文档。

如果指定一个文件名，就会启用这个文件中指定的选项和全局定义。```.jshintrc``` 必须是一个有效的 ```JSON``` 文件

#### .jshintignore文件

配置忽略的文件和目录列表。需为有效的```JSON```文件。在```options```中设置的```ignore```会覆盖这个文件中设置，而并不会合并。

#### jshint 配置

* __(curly)__: 大括号包裹，即不能使用这种代码：
```
while (notEnd())
	doSomething();
```
* __(eqeqeq)__: 对于简单类型，使用===和!==，而不是==和!=

* __(newcap)__: 对于首字母大写的函数（声明的类），强制使用new

* __(noarg)__: 禁用arguments.caller和arguments.callee

* __(sub)__: 对于属性使用aaa.bbb而不是aaa['bbb']

* __(undef)__: 查找所有未定义变量

* __(boss)__: 查找类似与if(a = 0)这样的代码

* __(node)__: 指定运行环境为node.js

> 全部的配置项: [jshint](http://www.jshint.com/docs/options/)