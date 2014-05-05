/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
module.exports = function(grunt) {    
    //Sets configuration options for Grunt Tasks below
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //Options for grunt-contrib-clean
        clean: {
          //Define Sub-tasks  
          //Clean dist folder
          dist: {
              src: [ 'dist' ]
          },         
        },
        //Options for grunt-contrib-copy
        copy: {
            //Define default files to copy
            staticFiles: { 
                files: [                            
                    //Main HTML page
                    {
                        src: 'public/index.html',
                        dest: 'dist/index.html'
                    },
                    //CSS
                    {
                        expand: true,
                        cwd: 'public/css/',
                        src: '**', //Copy all files and sub-folders
                        dest: 'dist/css'                        
                    },                    
                    //Javascripts
                    {
                        expand: true,
                        cwd: 'public/js/',
                        src: '**', //Copy all files and sub-folders
                        dest: 'dist/css'                        
                    }                   
                ]
            }            
        },
        //Defines parameters for requiresJS optimizations/compilation
	//See https://github.com/jrburke/r.js/blob/master/build/example.build.js for information
	//about parameters
        requirejs: {
	    //JavaScript Optimization
            mainJS: {
                options: {
                    baseUrl: "public/js/app",
                    paths: {
                        "app": "config/Init" //Init.js would live in public/js/app/init
                    },
                    wrap: false, //Handlebars does not work with wrap: true
                    //name: "libs/almond", //Smaller require.js library
                    preserveLicenseComments: false,
                    optimize: "uglify2",
                    mainConfigFile: "public/js/app/config/Init.js",
                    include: ["app"],
                    out: "dist/js/app/config/Init.js",
                    findNestedDependencies: true,
                    generateSourceMaps: true
                }
            },
	    //CSS Optimization
            desktopCSS: {
                options: {
                    optimizeCss: "standard",
                    cssIn: "./public/css/app.css",
                    out: "./dist/css/app.css"
                }
            },			
        },
        //Static Analysis
        jshint: {
            files: ['Gruntfile.js', 'public/js/app/**/*.js', '!public/js/app/**/*min.js'],
            options: {
                globals: {
                    jQuery: true,
                    console: false,
                    module: true,
                    document: true
                }
            }
        }
    });

    //Load external Grunt tasks
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    
    //Define composite tasks
    //This allows you to run things like:
    //grunt build, which will call clean, test and compile
    grunt.registerTask('test', ['jshint']);
    grunt.registerTask('compile', [
        'requirejs:mainJS', 
        'requirejs:desktopCSS'
    ]);
    grunt.registerTask('build', [
        //'test',
        'clean:dist',        
        //'compile', //No RequireJS
        'copy:staticFiles'
    ]);
    grunt.registerTask('default', 'build');
};

