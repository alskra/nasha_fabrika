module.exports = function () {
  $.gulp.task('production', $.gulp.series(
    function (done) {
      $.isDevelopment = false;
      done();
    },
    $.gulp.series(
      'clean',
      $.gulp.parallel('assets', 'img', $.gulp.series('fontello', 'fonts')),
      'templates',
      $.gulp.parallel('css.app', 'js.app'), $.gulp.parallel('server', 'watch', 'zip')
    )
  ));
};