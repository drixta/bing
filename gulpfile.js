const gulp = require('gulp');
const browserify = require('gulp-browserify');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const util = require('gulp-util');
const plumber = require('gulp-plumber');
const browserSync = require('browser-sync');
const connect = require('gulp-connect');
const imgmin = require('gulp-imagemin');
const reload = browserSync.reload;
const exec0 = require('child_process').exec;

var onError = function (err){
	util.beep();
	console.log(err);
};

gulp.task('browser-sync', function(){
	browserSync({});
});

gulp.task('connectDev', function () {
  connect.server({
    root: ['public'],
    port: 3000
  });
});

gulp.task('browserify', function () {
	return gulp.src('src/js/main.js')
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(browserify({transform: 'reactify'}))
		.pipe(concat('main.js'))
		.pipe(gulp.dest('public/js'))
		.pipe(reload({stream: true}));
});

gulp.task('img', function () {
	return gulp.src('src/asset/img/*.*')
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(imgmin())
		.pipe(gulp.dest('public/img'));
});
gulp.task('less', function(){
	return gulp.src('src/less/main.less')
		.pipe(plumber({
			errorHandler: onError
		}))
		.pipe(less())
		.pipe(autoprefixer({
            browsers: ['last 2 versions'],
        }))
		.pipe(gulp.dest('public/css'))
		.pipe(reload({stream: true}));
});

gulp.task('copy', function(){
	return gulp.src('src/index.html')
		.pipe(gulp.dest('public'))
		.pipe(reload({stream: true}));
});

gulp.task('default', ['browserify','copy','less']);

gulp.task('watch', function(){
	gulp.start('browser-sync');
	gulp.watch('./src/less/*.less', ['less', reload]);
	gulp.watch('./src/js/**/*.js', ['browserify', reload]);
	gulp.watch('./src/asset/img/*.*', ['img', reload]);
	gulp.watch('./src/*.html', ['copy'], reload);
});

gulp.task('server', function(){
	gulp.start('connectDev');
	exec0('open http://localhost:3000');
	return gulp.start('watch');
});