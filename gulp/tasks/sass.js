var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  gulp.src('./src/sass/*.sass')
    .pipe(sass({indentedSyntax:true}))
    .pipe(gulp.dest('./www/assets/css'));
});