const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const browserSync = require('browser-sync').create();
const sourcemaps = require('gulp-sourcemaps');
const prefix = require('gulp-autoprefixer');
// const wachedFiles = './scss/**/*.scss';

gulp.task('sourceMaps', () => {
    return gulp
    .src('./style.css')
    .pipe(sourcemaps.write())
    .pipe(prefix('last 2 versions'))
    .pipe(gulp.dest('./'));
})

gulp.task('styles', function() {
    return gulp.src('./scss/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

gulp.task('watch', function() {
browserSync.init({
    server: "./"
});

    gulp.watch('./scss/style.scss', gulp.series(['styles']));
    gulp.watch(['./*.html', './*.js']).on('change', browserSync.reload);
});