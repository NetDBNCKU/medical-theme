var browserSync = require('browser-sync');
var gulp = require('gulp');
var config = require('./config');

gulp.task('browser-sync', function() {
    var files = config.css_files.concat(config.scripts_dist, config.views.files);

    if (config.proxy) {
        browserSync.init(files, {
            proxy: config.proxy
        });
    } else {
         browserSync.init(files, {
            server: {
                baseDir: "./"
            }
        })
    }
});