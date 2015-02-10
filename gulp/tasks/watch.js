var gulp = require('gulp');

gulp.task('watch', ['setWatch'], function() {
	gulp.watch('src/stylus/**', ['stylus']);
	gulp.watch('src/coffee/**', ['browserify']);
	gulp.watch('src/jade/**', ['jade']);
	gulp.watch('src/images/**', ['images']);
});
