const gulp   = require('gulp'),
      eslint = require('gulp-eslint'),
      uglify = require('gulp-uglifyjs'),
      rename = require('gulp-rename');

gulp.task('lint', () => {
    return gulp.src('dist/decliner.js')
    .pipe(eslint({
        fix: true
    }))
    .pipe(eslint.format());
});

gulp.task('min', () => {
    return gulp.src('dist/decliner.js')
    .pipe(uglify())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['lint', 'min']);