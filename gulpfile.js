var gulp = require('gulp');
var sass = require('gulp-sass');
var connect = require('gulp-connect');
var browserify = require('browserify');
var source = require("vinyl-source-stream");

// GULP-CONNECT
gulp.task('connect', function () {
	connect.server({
		root: 'app',
		port: 4000
	})
});

// GULP-SASS
gulp.task('styles', function() {
    gulp.src('app/sass/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css/main'));
});

//Watch task
gulp.task('default', ['connect', 'styles'], function() {
    gulp.watch('sass/**/*.scss',['styles']);
    gulp.watch('js/main.js', ['build']);
});


