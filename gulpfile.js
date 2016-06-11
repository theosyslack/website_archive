var gulp = require('gulp'),
  browserify = require('browserify'),
  babelify = require('babelify'),
  vueify = require('vueify'),
  nodemon = require('gulp-nodemon'),
  es = require('event-stream'),
  flatten = require('gulp-flatten'),
  glob = require('glob'),
  source = require('vinyl-source-stream'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./source/scss/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch('./source/scss/*.*', ['sass']);
  gulp.watch('./source/js/**/*.*', ['bundle']);
});

gulp.task('bundle', function (done) {
    glob('source/js/*.*', function (err, files) {
        if (err) plumber(err);
        var tasks = files.map(function (entry) {
            return browserify({ entries: entry })
                .transform(vueify)
                .transform(babelify)
                .bundle()
                .on('error', function (err) {
                    plumber(err);
                    done();
                })
                .pipe(source(entry))
                .pipe(flatten())
                .pipe(gulp.dest('public/js/'));
        });

        es.merge(tasks).on('end', done);
    });
});

gulp.task('default', [
  'sass',
  'bundle',
  'watch'
]);
