"use strict"

var gulp = require("gulp");
var bookmarklet = require('gulp-bookmarklet');

gulp.task('bookmark', function() {
    return gulp.src('src/*.js')
        .pipe(bookmarklet())
        .pipe(gulp.dest('dist'));
});

gulp.task('watch', function(){
    gulp.watch('src/*.js',['bookmark']);
})

gulp.task('default',['bookmark', 'watch']);
