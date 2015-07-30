var gulp = require('gulp');
var config = require('./config'),
    watch = require('gulp-watch');

gulp.task('watch', function() {
    gulp.watch(config.scss_files, ['scss']);
    gulp.watch(config.views.hbs, ['canner']);
    gulp.watch(config.canner.files, ['canner']);
});
