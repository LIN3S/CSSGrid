var gulp = require('gulp');
var sass = require('gulp-sass');
var scsslint = require('gulp-scss-lint');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  sass: './scss',
  exampleCss: './example/css',
  exampleSass: './example/scss'
};

gulp.task('scss-lint', function () {
  return gulp.src(paths.exampleSass + '/*.scss')
    .pipe(scsslint({
      'config': './.scss_lint.yml'
    }));
});

gulp.task('example-css', function () {
  gulp.src(paths.exampleSass + '/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.exampleCss))
});
