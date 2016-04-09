'use strict';

var gulp = require('gulp');
var webserver = require('gulp-webserver');
var shell = require('gulp-shell')
var browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./src/web"
        }

    });
       gulp.watch("src/**/*.html").on('change', browserSync.reload);
          gulp.watch("src/**/*.ts").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);