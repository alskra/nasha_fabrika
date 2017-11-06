module.exports = function () {
  $.gulp.task('assets', function () {
    return $.combiner(
      $.gulp.src(['sources/assets/**/*.*']),
      $.gp.newer('build/assets'),
      $.gp.imagemin([
        $.gp.imagemin.gifsicle({interlaced: true}),
        $.imageminMozjpeg({progressive: true, quality: 95}),
        $.gp.imagemin.optipng({optimizationLevel: 5}),
        $.gp.imagemin.svgo({plugins: [{removeViewBox: false}]})
      ], {
        verbose: true
      }),
      $.gp.debug({title: 'DEBUG "assets" gulp.dest:'}),
      $.gulp.dest('build/assets')
    ).on('error', $.gp.notify.onError(function (err) {
      return {
        title: 'ERROR "assets":',
        message: err.message
      }
    }));
  });
};