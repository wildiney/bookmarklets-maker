const { dest, src, watch } = require('gulp');
const bookmarklet = require('gulp-bookmarklet');
const dir = {
    src: 'src/*.js',
    dist: 'dist/'
}

function bookmark() {
    return src(dir.src)
        .pipe(bookmarklet())
        .pipe(dest(dir.dist));
}

exports.default = ()=>{
    watch(dir.src, bookmark);
};