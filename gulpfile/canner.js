var canner = require('gulp-canner');
var gulp = require('gulp');
var config = require('./config');
// var browserSync = require('browser-sync').create();

gulp.task('canner', function() {
    gulp.src(config.canner.files)
        .pipe(canner());
});
