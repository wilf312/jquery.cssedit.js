const gulp = require('gulp')
const sass = require('gulp-dart-sass')

function transpileSass() {
  gulp
    .src('src/scss/top.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'))
}

function defaultTask(cb) {
  transpileSass()
  cb()
}
exports.default = defaultTask