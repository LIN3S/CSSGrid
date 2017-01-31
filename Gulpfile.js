// This file is part of the LIN3S CSS Grid library.
//
// Copyright (c) 2016-2017 LIN3S <info@lin3s.com>
//
// For the full copyright and license information, please view the LICENSE
// file that was distributed with this source code.
//
// @author Gorka Laucirica <gorka.lauzirika@gmail.com>
// @author Beñat Espiña <benatespina@gmail.com>

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
  gulp.src(paths.exampleSass + '/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.exampleCss))
});
