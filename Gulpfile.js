'use strict';
var gulp       = require('gulp');
var babelify   = require('babelify');
var browserify = require('browserify');
var source     = require('vinyl-source-stream');
 
gulp.task('default', function () {
  
  browserify({
    entries : './js/main.js'
  })
  .transform(babelify)
  .transform('debowerify')
  .transform('deamdify')
  //.transform('uglifyify')
  .bundle()
  .pipe(source('app.js'))
  .pipe(gulp.dest('./js/dist')); 
});

gulp.task('watch', function(){
  gulp.watch(['./js/inc/**','./js/main.js'], ['default']);
});  