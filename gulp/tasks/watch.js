var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', ['setWatch'], function() {
	gulp.watch('src/stylus/**', ['stylus']);
	//gulp.watch('src/sass/**', ['sass']);
	gulp.watch('src/coffee/**', ['browserify']);
	gulp.watch('src/jade/**', ['jade']);
	gulp.watch('src/images/**', ['images']);
	livereload.listen();
});
