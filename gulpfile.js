'use strict';

const gulp = require("gulp");

const concat = require("gulp-concat");
const gulp_remove_logging = require("gulp-remove-logging");
const uglify = require("gulp-uglify-es").default;
const sass = require('gulp-sass');



const minify = _ => gulp.src("./scripts/scripts.js").pipe(gulp_remove_logging()).pipe(uglify()).pipe(gulp.dest("./scripts/min"));

gulp.task('sass', function(done) {
  gulp.src('./css/sass/*.scss')
      .pipe(sass())
      .pipe(concat('styles.css')) 
      .pipe(gulp.dest('./css/'));
      done();
});

gulp.task('watch', function() {
  gulp.watch('./css/sass/*.scss', gulp.series('sass'));
});

gulp.task("minify", minify);
