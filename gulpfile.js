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
  js: "assets/js/",
  sass: "scss/**/*.scss",
  mainSass: "scss/main.scss",
  components: "assets/js/components/",
};

var sources = {
  assets: config.source + paths.assets,
  html: config.source + paths.html,
  js: config.source + paths.js,
  img: config.source + paths.img,
  sass: paths.assets + paths.sass,
  rootSass: config.source + paths.assets + paths.mainSass,
  components: config.source + paths.components,
  icons: config.source + paths.assets + paths.icons
};

gulp.task('html', () => {
  gulp.src(sources.html).pipe(gulp.dest(config.dist));
});

gulp.task('todo', () => {
  gulp.src([sources.components + 'navbar.js', sources.js +'app.js'])
  .pipe(concat("bundle.js"))
  .pipe(gulp.dest('./public/assets/js/'));
});

gulp.task('sass', ()=>{
  console.log(sources.rootSass);
  gulp.src(sources.rootSass)
  .pipe(sass({
    outputStyle: "compressed"
  }).on("Error", sass.logError))
  .pipe(gulp.dest(config.dist + paths.assets + "css"));
});

gulp.task("sass-watch", ["sass"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("html-watch", ["html"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("todo-watch", ["todo"], function (done) {
  browserSync.reload();
  done();
});

gulp.task("serve", () => {
  browserSync.init({
    server: {
      baseDir: config.dist
    }
  });
  gulp.watch(sources.html, ["html-watch"]);
  gulp.watch(sources.rootSass, ["sass-watch"]);
  gulp.watch(['./src/assets/js/components/*.js', sources.js +'app.js'], ["todo-watch"]);
});
