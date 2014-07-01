module.exports = (grunt) ->

    c = console

    # プラグインの自動読み込み
    taskName = undefined

    c.log " // ----------------- 読み込みパッケージ名"

    for taskName of grunt.file.readJSON('package.json').devDependencies

        if taskName isnt "grunt"
            c.log taskName
            grunt.loadNpmTasks taskName

    c.log ""

    # グラントタスクの設定
    grunt.initConfig
        sass:
            dist:
                files: [
                    expand: true
                    cwd: "scss"
                    src: ["*.scss"]
                    dest: "css/"
                    ext: ".css"
                ]
                options:
                    lineNumbers: true
                    style: 'expanded'
        watch:
            scss:
                files: ["scss/*.scss"]
                tasks: ["_sass"]


    grunt.registerTask "default" , ["sass"]
    grunt.registerTask "_sass", ["sass"]
