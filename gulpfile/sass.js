var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    notify = require("gulp-notify"),
    sourcemaps = require('gulp-sourcemaps'),
    config = require('./config'),
    minifyCSS = require('gulp-minify-css');

gulp.task('scss', function() {
    return sass(config.scss_folder, { container: 'gulp-ruby-sass' })
            .on("error", notify.onError(function(error) {
                return "Error: " + error.message;
            }))
        // .pipe(autoprefix('last() 2 version'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.css_folder));
});

gulp.task('min-css', function() {
    return gulp.src(config.style.files)
       .pipe(minifyCSS({keepBreaks:false, advanced: false}))
       .pipe(gulp.dest('config.css'))
})

// gulp.task('scss', ['scss'])