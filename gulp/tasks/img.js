module.exports = function () {
  $.gulp.task('img', function () {
    return $.combiner(
      $.gulp.src(['sources/img/**/*.{png,jp*g,gif,svg}']),
      $.gp.newer('build/img'),
      $.gp.imagemin([
        $.gp.imagemin.gifsicle({interlaced: true}),
        $.imageminMozjpeg({progressive: true, quality: 95}),
        $.gp.imagemin.optipng({optimizationLevel: 5}),
        $.gp.imagemin.svgo({plugins: [{removeViewBox: false}]})
      ], {
        verbose: true
      }),
      $.gp.debug({title: 'DEBUG "img" gulp.dest:'}),
      $.gulp.dest('build/img')
    ).on('error', $.gp.notify.onError(function (err) {
      return {
        title: 'ERROR "img":',
        message: err.message
      }
    }));
  });
};