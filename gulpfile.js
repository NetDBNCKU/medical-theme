var requireDir = require('require-dir');
var gulp = require('gulp');
//var runSequence = require('gulp-run-sequence');
requireDir('./gulpfile', { recurse: true });

gulp.task('default', ['watch', 'browserify', 'browser-sync', 'scss', 'canner']);

//gulp.task('deploy', function(cb) {
//    runSequence('js-compress', 'scss', 'min-css')
//})