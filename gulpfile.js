var gulp = require('gulp'),
    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename');

gulp.task('less', function() {
    gulp.src('css-utils.less')
        .pipe(less())
        .pipe(gulp.dest('build'));
});

gulp.task('minify-css', function() {
  return gulp.src('build/css-utils.css')
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build'))
});

gulp.task('default', ['less','minify-css']);