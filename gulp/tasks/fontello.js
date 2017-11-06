module.exports = function () {
  $.gulp.task('fontello', function () {
    return $.combiner(
      $.gulp.src(['sources/fonts/fontello/config.json']),
      $.gp.fontello({font: 'fonts/fontello'}),
      $.gp.debug({title: 'DEBUG "fontello" gulp.dest:'}),
      $.gulp.dest('sources/fonts/fontello')
    ).on('error', $.gp.notify.onError(function (err) {
      return {
        title: 'ERROR "fontello":',
        message: err.message
      }
    }));
  });
};