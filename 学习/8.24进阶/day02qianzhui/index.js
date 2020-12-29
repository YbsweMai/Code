const gulp = require('gulp')
const autoprefixer = require('gulp-autoprefixer')


gulp.src('./index.css')
    .pipe(autoprefixer({
        // browsers:['since 2010'], // 兼容2010年以后游览器 或者写在package.json
        // overrideBrowserslist:['since 2010'],
        cascade:false  
    }))
.pipe(gulp.dest('dist'))