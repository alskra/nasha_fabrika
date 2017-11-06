module.exports = function () {
  $.gulp.task('css.app', $.gulp.series($.gulp.parallel('css.core', 'css.blocks'), function () {
    return $.combiner(
      $.gulp.src(['build/css/core.css', 'build/css/blocks.css']),
      $.gp.sourcemaps.init({loadMaps: true}),
      $.gp.concat({path: $.path.resolve('app.css')}),
      $.gp.cleanCss($.config.cleanCss.dev),
      $.gp.sourcemaps.write('.'),
      $.gp.debug({title: 'DEBUG "css.app" gulp.dest:'}),
      $.gulp.dest('build/css'),
      // On production
      $.gp.if(!$.isDevelopment, $.gp.filter('**/*.css')),
      $.gp.if(!$.isDevelopment, $.gp.rename('app.min.css')),
      $.gp.if(!$.isDevelopment, $.gp.cleanCss($.config.cleanCss.prod, function (details) {
        console.log('\x1b[36m%s\x1b[0m', 'Source CSS: ' + details.name + ' Original size: ' + details.stats.originalSize);
        console.log('\x1b[36m%s\x1b[0m', 'Source CSS: ' + details.name + ' Minified size: ' + details.stats.minifiedSize);
      })),
      $.gp.if(!$.isDevelopment, $.gp.debug({title: 'DEBUG "css.app" gulp.dest:'})),
      $.gp.if(!$.isDevelopment, $.gulp.dest('build/css'))
    ).on('error', $.gp.notify.onError(function (err) {
      return {
        title: 'ERROR "css.app":',
        message: err.message
      }
    }));
  }));
};