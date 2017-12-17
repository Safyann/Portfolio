const gulp = require('gulp');

const pug = require('gulp-pug');

const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const jshint = require('gulp-jshint');
const lintConfig = require('./lint.config.js');
const babel = require('gulp-babel');

const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const sourcemaps = require('gulp-sourcemaps');
const uncss = require('gulp-uncss');
const autoprefixer = require('gulp-autoprefixer');
const postcss = require('gulp-postcss');
const pxtorem = require('postcss-pxtorem');

const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

const svgSprite = require('gulp-svg-sprite'),
      svgmin = require('gulp-svgmin'),
      cheerio = require('gulp-cheerio'),
      replace = require('gulp-replace');

const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const del = require('del');
const browserSync = require('browser-sync').create();

var path = {
  dist: {
    //продакшен
    html: "dist",
    js: "dist/js",
    css: "dist/css",
    img: "dist/img",
    fonts: "dist/fonts",
    icons: "dist/img/icons"
  },
  app: {
    //исходники
    pages: "app/templates/pages/*.pug",
    js: "app/js/**/*.js",
    style: "app/style/styles.scss",
    img: "app/img/**/*.*",
    fonts: "app/fonts/**/*.*",
    icons: "app/img/icons/**/*.svg"
  },
  watch: {
    templates: "app/templates/**/*.pug",
    js: "app/js/**/*.js",
    style: "app/style/**/*.scss",
    img: "app/img/**/*.*"
  },
  clean: "dist" //удаление
};

var plugins = [
  pxtorem({
    replace: false,
    propList: ['*'],
    minPixelValue: 3
  })
]
//сборка html
function templates() {
  return gulp
    .src(path.app.pages)
    .pipe(plumber())
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest(path.dist.html))
    .pipe(browserSync.reload({
      stream: true
    }))
}
//сборка css
function styles() {
  return gulp
    .src(path.app.style)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: "compressed" }))
    .pipe(autoprefixer({ browsers: ["last 4 versions"], cascade: false }))
    .pipe(postcss(plugins))
    .pipe(sourcemaps.write())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(path.dist.css))
    .pipe(browserSync.reload({ stream: true }));
}
// сборка js
function scripts() {
  return gulp
    .src(path.app.js)
    .pipe(plumber())
    .pipe(jshint(lintConfig))
    .pipe(jshint.reporter("default"))
    .pipe(babel({ presets: ["env"] }))
    .pipe(gulpWebpack(webpackConfig, webpack))
    .pipe(gulp.dest(path.dist.js))
    .pipe(browserSync.reload({ stream: true }));
}
//оптимизация картинок
function images() {
  return gulp
    .src(path.app.img)
    .pipe(imagemin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{ removeViewBox: false }],
        use: [pngquant()]
      }))
    .pipe(gulp.dest(path.dist.img))
    .pipe(browserSync.reload({ stream: true }));
}
//копирование шрифтов
function fonts() {
  return gulp.src(path.app.fonts)
    .pipe(gulp.dest(path.dist.fonts))
}
//создание SVG спрайты
function sprite() {
  return gulp.src(path.app.icons)
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: "sprite.svg"
        }
      }
    }))
    .pipe(gulp.dest(path.dist.icons));
}
//очистка
function clean() {
  return del(path.clean)
}
//Вотчер
function watch() {
  gulp.watch(path.watch.templates, templates);
  gulp.watch(path.watch.js, scripts);
  gulp.watch(path.watch.style, styles);
  gulp.watch(path.watch.img, images);
}
//сервер
function server() {
  browserSync.init({
    server: "dist"
  })
}

exports.templates = templates;
exports.styles = styles;
exports.images = images;
exports.fonts = fonts;
exports.clean = clean;
exports.server = server;
exports.watch = watch;
exports.scripts = scripts;
exports.sprite = sprite;

gulp.task('build', gulp.parallel(styles, templates, images, scripts, fonts, sprite))

gulp.task('default', gulp.series(
  clean,
  gulp.parallel(styles, templates, images, scripts, fonts, sprite),
  gulp.parallel(watch, server)
));
