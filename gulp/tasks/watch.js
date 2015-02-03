var gulp = require('gulp');

gulp.task('watch', ['setWatch'], function() {
	gulp.watch('src/sass/**', ['sass']);
	gulp.watch('src/coffee/**', ['browserify']);
	gulp.watch('src/images/**', ['images']);
});
