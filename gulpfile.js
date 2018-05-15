'use strict';

const del = require('del');
const gulp = require('gulp');
const plumber = require('gulp-plumber');
const server = require('browser-sync').create();
const rollup = require('gulp-better-rollup');
const sourcemaps = require('gulp-sourcemaps');
const mocha = require('gulp-mocha');

gulp.task('scripts', function () {
  return gulp.src('js/main.js')
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(rollup({}, 'iife'))
    .pipe(sourcemaps.write(''))
    .pipe(gulp.dest('build'));
});

gulp.task('test', function () {
  return gulp
    .src(['js/**/*.test.js'], { read: false })
    .pipe(mocha({
      compilers: ['js:babel-register'],
      reporter: 'spec'
    }));
});

gulp.task('copy', function () {
  return gulp.src('*.{html,css}')
    .pipe(gulp.dest('build'))
    .pipe(server.stream());
});

gulp.task('clean', function () {
  return del('build');
});

gulp.task('js-watch', ['scripts'], function (done) {
  server.reload();
  done();
});

gulp.task('serve', ['build'], function () {
  server.init({
    server: './build',
    notify: false,
    open: true,
    port: 3502,
    ui: false
  });

  gulp.watch('*.{html,css}').on('change', (e) => {
    if (e.type !== 'deleted') {
      gulp.start('copy');
    }
  });
  gulp.watch('js/**/*.js', ['js-watch']);
});

gulp.task('build', ['clean'], function () {
  gulp.start('copy', 'scripts');
});
