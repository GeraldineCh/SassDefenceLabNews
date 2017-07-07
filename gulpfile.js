var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('gulp-browserify');
var rename = require('gulp-rename');
var browserSync = require('browser-sync').create();
var concat = require('gulp-concat');

var config = {
  source: './src/',
  dist: './public'
};

var paths = {
  assets: "/assets/",
  img: "assets/img/*.png",
  html: "**/*.html",
  sass: "scss/**/*.scss",
  mainSass: "scss/main.scss",
  componentsFolder: "./src/assets/js/components/",
};

var sources = {
  assets: config.source + paths.assets,
  html: config.source + paths.html,
  img: config.source + paths.img,
  sass: paths.assets + paths.sass,
  rootSass: config.source + paths.assets + paths.mainSass,
  rootComponents: config.source + paths.assets + paths.components,
  icons: config.source + paths.assets + paths.icons
};

gulp.task('html', () => {
  gulp.src(sources.html).pipe(gulp.dest(config.dist));
})
