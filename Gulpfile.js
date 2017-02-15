/*
 * This file is part of the LIN3S CSS Grid library.
 *
 * Copyright (c) 2016-present LIN3S <info@lin3s.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @author Gorka Laucirica <gorka.lauzirika@gmail.com>
 * @author Beñat Espiña <benatespina@gmail.com>
 */

var gulp = require('gulp');
var fs = require('fs');
var cssNano = require('gulp-cssnano');
var license = require('gulp-header-license');
var sass = require('gulp-sass');
var scsslint = require('gulp-scss-lint');
var rename = require('gulp-rename');
var sourcemaps = require('gulp-sourcemaps');

var paths = {
  sass: './scss',
  exampleCss: './example/css',
  exampleSass: './example/scss',
  dist: './dist'
};

gulp.task('scss-lint', function () {
  return gulp.src(paths.exampleSass + '/*.scss')
    .pipe(scsslint({
      'config': './.scss_lint.yml'
    }));
});

gulp.task('dist', function () {
  var year = (new Date()).getFullYear();

  gulp.src(paths.sass + '/dist.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssNano({
      keepSpecialComments: 1,
      rebase: false
    }))
    .pipe(rename({
      basename: 'lin3s-css-grid',
      suffix: '.min'
    }))
    .pipe(license(
      fs.readFileSync('header.txt', 'utf8'),
      {year: year}, 0.9)
    )
    .pipe(gulp.dest(paths.dist));
});

gulp.task('example-css', function () {
  gulp.src(paths.exampleSass + '/app.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(paths.exampleCss))
});
