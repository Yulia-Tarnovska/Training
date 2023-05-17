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
})