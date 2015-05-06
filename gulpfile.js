var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename');

gulp.task('less', function() {
    gulp.src('css-utils.less')
        .pipe(less())
        .pipe(gulp.dest('build'));
});

gulp.task('minify-css', function() {
  return gulp.src('build/css-utils.css')
    .pipe(minifyCSS({keepSpecialComments:"1"}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build'))
});

gulp.task('default', ['less','minify-css']);

gulp.task('build', function() {
  return gulp.src(['source/*.less'])
    .pipe(concat('less-utils.less'))
    .pipe(gulp.dest('build'))
});