module.exports = function () {
  $.gulp.task('js.core', function () {
    const sources = JSON.parse($.fs.readFileSync('sources.json'));
    return $.combiner(
      $.gulp.src(sources.jsCore),
      $.gp.sourcemaps.init(),
      $.gp.concat({path: $.path.resolve('core.js')}),
      $.gp.jsbeautifier({js: {
        indent_size: 2
      }}),
      $.gp.sourcemaps.write('.'),
      $.gp.debug({title: 'DEBUG "js.core" gulp.dest:'}),
      $.gulp.dest('build/js'),
      // On production
      $.gp.if(!$.isDevelopment, $.gp.filter('**/*.js')),
      $.gp.if(!$.isDevelopment, $.gp.rename('core.min.js')),
      $.gp.if(!$.isDevelopment, $.gp.uglify()),
      $.gp.if(!$.isDevelopment, $.gp.debug({title: 'DEBUG "js.core" gulp.dest:'})),
      $.gp.if(!$.isDevelopment, $.gulp.dest('build/js'))
    ).on('error', $.gp.notify.onError(function (err) {
      return {
        title: 'ERROR "js.core":',
        message: err.message
      }
    }));
  });
};