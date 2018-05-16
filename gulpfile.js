"use strict";

var gulp = require("gulp");
var bookmarklet = require('gulp-bookmarklet');

gulp.task('bookmarklet', function() {
    return gulp.src('src/*.js')
        .pipe(bookmarklet())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch',['bookmarklet'],function(){
    gulp.watch("./src/*.js",['bookmarklet']);
});

gulp.task('default',['bookmarklet','watch']);