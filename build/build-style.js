const { series, src, dest } = require('gulp');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const rename = require('gulp-rename');

// 编译所有 less
function compileLess() {
    return src('../src/styles/*.less')
        .pipe(less())
        .pipe(autoprefixer({ cascade: false }))
        .pipe(cleanCSS())
        .pipe(dest('../dist/styles'));
}

// 基础样式 按需引入单个组件时需要先引入 base.css
function compileBaseLess() {
    return src('../src/styles/common/index.less')
        .pipe(less())
        .pipe(autoprefixer({ cascade: false }))
        .pipe(cleanCSS())
        .pipe(rename('base.css'))
        .pipe(dest('../dist/styles'));
}

// 复制所有 less, 自定义主题时需要
function copyLess() {
    return src('../src/styles/**/*.less')
        .pipe(dest('../dist/styles'));
}

// 拷贝字体文件
// gulp.task('fonts', function() {
//     gulp.src('../src/styles/common/iconfont/fonts/*.*')
//         .pipe(gulp.dest('../dist/styles/fonts'));
// });
function copyFont() {
    return src('../src/styles/common/font/*')
        .pipe(dest('../dist/styles/font'));
}

exports.build = series(compileLess, compileBaseLess, copyLess, copyFont);
