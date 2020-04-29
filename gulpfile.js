const gulp = require("gulp");
const sass = require("gulp-sass");
const sassGlob = require("gulp-sass-glob");
const autoprefixer = require("gulp-autoprefixer");
const concat = require("gulp-concat");
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");

const scss = {
  input: "sass/style.scss",
  output: "public/styles/",
  allSass: ["components/**/*.scss", "sass/**/*.scss"]
};

const js = {
  files: [
    "js/main.js",
    "js/_util.js",
    "js/_breakpoints.js",
    "js/_start.js",
    "components/**/*.js"
  ],
  dest: "public/js"
};

function processScss() {
  return gulp.src(scss.input)
    .pipe(sassGlob())
    .pipe(sass({
      outputStyle: "compressed"
    }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(scss.output));
}

function processJs() {
  return gulp.src(js.files)
    .pipe(concat("main.js"))
    .pipe(gulp.dest(js.dest))
    .pipe(rename("main.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(js.dest))
}

function watch() {
  gulp.watch(scss.allSass, processScss)
    .on("change", function (event) {
      console.log("File " + event.path + " was " + event.type + ", running tasks...");
    });
  gulp.watch(js.files, processJs)
    .on("change", function (event) {
      console.log("File " + event.path + " was " + event.type + ", running tasks...");
    });
}

exports.default = gulp.series(processScss, processJs);
exports.watch = gulp.series(processScss, processJs, watch);