var gulp = require('gulp'),
  connect = require('gulp-connect'),
  karma = require('karma').server;

gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    port: 8888
  });
});

gulp.task('unit', function (done) {
  karma.start({
    configFile: __dirname + '/tests/config.js',
    singleRun: true
  }, done);
});

gulp.task('default', ['connect']);
