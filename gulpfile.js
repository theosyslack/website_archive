var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  babel = require('gulp-babel'),
  livereload = require('gulp-livereload'),
  sass = require('gulp-sass');


var p = {
  'scss': {
    'destination': './public/css/',
    'source': './source/scss/**/*.*'
  },
  'js': {
    'destination': './public/js/',
    'source': '/source/js/**/*.*'
  }
};


gulp.task('scss', function () {
  livereload.listen();
  gulp.src(p.scss.source)
    .pipe(plumber())
    .pipe(sass())
    .pipe(gulp.dest(p.scss.destination))
    .pipe(livereload());
});

gulp.task('js', function(){
  livereload.listen();
  gulp.src(p.js.source)
      .pipe(babel())
      .pipe(gulp.dest(p.js.destination))
      .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch(p.scss.source, ['scss']);
  gulp.watch(p.js.source, ['js']);
});

gulp.task('default', [
  'scss',
  'js',
  'watch'
]);
