var gulp = require('gulp');
var gutil = require('gulp-util');
var autoprefixer = require('gulp-autoprefixer');
var jade = require('gulp-jade');
var compass = require('gulp-compass');
var livereload = require('gulp-livereload');
var jshint = require('gulp-jshint');
var rename = require('gulp-rename');

gulp.task('scripts', function() {
  gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(livereload())
});

gulp.task('templates', function() {
  gulp.src('./templates/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./'))
    .pipe(livereload());
});

gulp.task('styles', function() {
  gulp.src('./scss/*.scss')
    .pipe(compass({
      config_file: './config.rb',
      css: '.',
      sass: 'scss'
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', 'ie >= 8'],
      cascade: false
    }))
    .pipe(gulp.dest('.'))
    .pipe(livereload());
});

gulp.task('to-php', function() {
  gulp.src('./index.html')
    .pipe(rename('index.php'))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('./js/*.js', ['scripts']);
  gulp.watch('./scss/*.scss', ['styles']);
  gulp.watch('./scss/components/*.scss', ['styles']);
  gulp.watch('./templates/*.jade', ['templates']);
  // gulp.watch('./index.html', ['to-php']);
});
