module.exports = function () {
  $.gulp.task('fonts', $.gulp.parallel(
    function () {
      return $.combiner(
        $.gulp.src(['sources/fonts/**/*.{woff*,ttf,eot,svg}', '!sources/fonts/fontello/**'],
          {base: $.path.resolve("sources/fonts")}
        ),
        $.gp.newer('build/fonts'),
        $.gp.debug({title: 'DEBUG "fonts" gulp.dest:'}),
        $.gulp.dest('build/fonts')
      ).on('error', $.gp.notify.onError(function (err) {
        return {
          title: 'ERROR "fonts":',
          message: err.message
        }
      }));
    },
    function () {
      return $.combiner(
        $.gulp.src(['sources/fonts/fontello/fonts/fontello/*.{woff*,ttf,eot,svg}']),
        $.gp.newer('build/fonts/fontello'),
        $.gp.debug({title: 'DEBUG "fonts" gulp.dest:'}),
        $.gulp.dest('build/fonts/fontello')
      ).on('error', $.gp.notify.onError(function (err) {
        return {
          title: 'ERROR "fonts":',
          message: err.message
        }
      }));
    })
  );
};