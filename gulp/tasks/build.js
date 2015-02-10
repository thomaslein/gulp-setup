var gulp = require('gulp');

gulp.task('build', ['browserify', 'jade', 'stylus', 'images', 'copy', 'concat']);
