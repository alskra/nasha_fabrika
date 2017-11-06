module.exports = function () {
  $.gulp.task('js.blocks', function () {
    return $.combiner(
      $.gulp.src($.blocksArr.map(function (blockPath) {
        return $.path.join(blockPath, '*.js');
      })),
      $.gp.sourcemaps.init(),
      $.gp.concat({path: $.path.resolve('blocks.js')}),
      $.gp.babel($.config.babel),
      $.gp.jsbeautifier({js: {
        indent_size: 2
      }}),
      $.gp.sourcemaps.write('.'),
      $.gp.debug({title: 'DEBUG "js.blocks" gulp.dest:'}),
      $.gulp.dest('build/js'),
      // On production
      $.gp.if(!$.isDevelopment, $.gp.filter('**/*.js')),
      $.gp.if(!$.isDevelopment, $.gp.rename('blocks.min.js')),
      $.gp.if(!$.isDevelopment, $.gp.uglify()),
      $.gp.if(!$.isDevelopment, $.gp.debug({title: 'DEBUG "js.blocks" gulp.dest:'})),
      $.gp.if(!$.isDevelopment, $.gulp.dest('build/js'))
    ).on('error', $.gp.notify.onError(function (err) {
      return {
        title: 'ERROR "js.blocks":',
        message: err.message
      }
    }));
  });
};