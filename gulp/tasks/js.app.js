module.exports = function () {
  $.gulp.task('js.app', $.gulp.series($.gulp.parallel('js.core', 'js.blocks'), function () {
    return $.combiner(
      $.gulp.src(['build/js/core.js', 'build/js/blocks.js']),
      $.gp.sourcemaps.init({loadMaps: true}),
      $.gp.concat({path: $.path.resolve('app.js')}),
      $.gp.sourcemaps.write('.'),
      $.gp.debug({title: 'DEBUG "js.app" gulp.dest:'}),
      $.gulp.dest('build/js'),
      // On production
      $.gp.if(!$.isDevelopment, $.gp.filter('**/*.js')),
      $.gp.if(!$.isDevelopment, $.gp.rename('app.min.js')),
      $.gp.if(!$.isDevelopment, $.gp.uglify()),
      $.gp.if(!$.isDevelopment, $.gp.debug({title: 'DEBUG "js.app" gulp.dest:'})),
      $.gp.if(!$.isDevelopment, $.gulp.dest('build/js'))
    ).on('error', $.gp.notify.onError(function (err) {
      return {
        title: 'ERROR "js.app":',
        message: err.message
      }
    }));
  }));
};