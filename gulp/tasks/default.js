module.exports = function () {
  $.gulp.task('default', $.gulp.series(
    'clean',
    $.gulp.parallel('assets', 'img', $.gulp.series('fontello', 'fonts')),
    'templates',
    $.gulp.parallel('css.core', 'css.blocks', 'js.core', 'js.blocks'), $.gulp.parallel('server', 'watch')
  ));
};