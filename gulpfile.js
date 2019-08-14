const gulp = require('gulp');
const sass = require('gulp-sass');
const packageImporter = require('node-sass-package-importer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

function scss(cb) {
    return gulp.src(['css/index.scss', 'css/prism-base16-monokai.dark.css'])
               .pipe(sass(
                   {importer: packageImporter(),
                    includePaths: ['node_modules']}
               ).on('error', sass.logError))
               .pipe(cleanCSS())
               .pipe(gulp.dest('_dist/css'));
}

function js(cb) {
    return gulp.src(['node_modules/jquery/dist/jquery.slim.min.js',
                     'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'])
               .pipe(concat('all.js'))
               .pipe(gulp.dest('_dist/js'));
}

function scssWatch(cb) {
    return gulp.watch(['css/*.scss'], scss)
}

exports.scssWatch = scssWatch
exports.scss = scss
exports.js = js
exports.default = gulp.parallel(scss, js)
