module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        notify_hooks: {
            options: {
                enabled: true,
                max_jshint_notifications: 1, // maximum number of notifications from jshint output
                title: "TartiGame", // defaults to the name in package.json, or will use project directory's name
                success: false, // whether successful grunt executions should be notified automatically
                duration: 3 // the duration of notification in seconds, for `notify-send only
            }
        },

        bower: {
            install: {
                options: {
                    install: true,
                    copy: false,
                    targetDir: './libs',
                    cleanTargetDir: true
                }
            }
        },
        jshint:{
            options:{
                force: true
            },
            target: ['Gruntfile.js',"unit-tests/*.js" , "app/app.js"]
        },
        karma:{
            options:{
                configFile: 'karma.conf.js'
            },
            continuous: {
                singleRun: true,
                autoWatch: true
            },
            single:{
                singleRun: true,
                autoWatch: false
            }
        },
        watch:{
            options:{
                livereload: true
            },
            js:{
                files: ['app/*.js', 'unit-tests/*js', 'app/*.html', 'Gruntfile.js'],
                tasks:['concurrent:target'],
                options: {
                    atBegin: true
                }
            }
        },
        concurrent:{
            target:{
                options:{
                    logConcurrentOutput: true
                },
                tasks: [['jshint'], 'karma:continuous']
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-notify');
    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-karma');

    grunt.task.run('notify_hooks');

    grunt.registerTask('dev', ['jshint', 'watch']);
    grunt.registerTask('pixiTest', ['jshint', "karma:single"]);
};
