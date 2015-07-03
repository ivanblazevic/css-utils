var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename');

gulp.task('less', function() {
    gulp.src('source/margins-paddings.less')
        .pipe(less())
        .pipe(rename('css-utils.css'))
        .pipe(gulp.dest('build'));
});

gulp.task('minify-css', ['less'], function() {
  return gulp.src('build/css-utils.css')
    .pipe(minifyCSS({keepSpecialComments:"1"}))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build'))
});

gulp.task('default', ['minify-css']);