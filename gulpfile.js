const gulp = require('gulp');
const sass = require('gulp-sass');
const browserify = require('gulp-browserify');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');

const config = {
  source: './src/',
  dist: './public'
};

const paths = {
  assets: "/assets/",
  img: "assets/img/*.png",
  html: "**/*.html",
  img: "assets/img/**/*.png",
  js: "assets/js/",
  sass: "scss/**/*.scss",
  mainSass: "scss/main.scss",
  components: "assets/js/components/",
};

const sources = {
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
  gulp.src([sources.components + 'navbar.js', sources.components + 'header.js',
            sources.components + 'main-nav.js', sources.components + 'main-new.js',sources.js +'app.js'])
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

gulp.task('img', ()=>{
  gulp.src(sources.img).pipe(gulp.dest(config.dist + paths.assets + "img"));
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

gulp.task("watcher", () => {
  gulp.watch(sources.html, ["html-watch"]);
  gulp.watch(sources.rootSass, ["sass-watch"]);
  gulp.watch(['./src/assets/js/components/*.js', sources.js +'app.js'], ["todo-watch"]);
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
