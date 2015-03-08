'use strict';
var gulp       = require('gulp');
var less       = require('gulp-less');
var babelify   = require('babelify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
 

//Default
gulp.task('default', function() {
  gulp.start('js', 'less');
});

gulp.task('js', function () {
  //Javascript
  browserify({
    entries : './js/src/init.js'
  })
  .transform(babelify)
  .transform('debowerify')
  .transform('deamdify')
  //.transform('uglifyify')
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./js/dist')); 
});
 
gulp.task('less', function () {
  //Less
  gulp.src('./css/src/**.less')
  .pipe(less())
  .pipe(gulp.dest('./css/dist'));
});

//Watch
gulp.task('watch', function(){
  gulp.watch(['./js/src/**'], ['js']);
  gulp.watch(['./css/src/**'], ['less']);
});  