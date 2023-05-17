const gulp = require('gulp')
const saas = require('gulp-saas')(require('saas'));

const watchedFiles = "./**/*.scss"

gulp.task('styles', function() {
    return gulp
    .src(watchedFiles)
    .pipe(saas().on('error', saas.logError))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
    gulp.watch(watchedFiles, gulp.series(['styles']))
});




const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

exports.default = () => (
	gulp.src('src/app.css')
		.pipe(autoprefixer({
			cascade: false
		}))
		.pipe(gulp.dest('dist'))
);



const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

exports.default = () => (
	gulp.src('src/**/*.css')
		.pipe(sourcemaps.init())
		.pipe(autoprefixer())
		.pipe(concat('all.css'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'))
);