module.exports = function () {
  $.gulp.task('css.core', function () {
    const sources = JSON.parse($.fs.readFileSync('sources.json'));
    return $.combiner(
      $.gulp.src(sources.cssHelpers.concat(sources.cssCore), {base: process.cwd()}),
      $.gp.sourcemaps.init(),
      $.gp.importify('core.scss', {
        cssPreproc: 'scss'
      }),
      $.gp.sass({
        includePaths: [],
        outputStyle: 'expanded',
        functions: $.sassInlineImage()
      }),
      $.gp.autoprefixer($.config.autoprefixer),
      $.gp.sourcemaps.write('.'),
      $.gp.debug({title: 'DEBUG "css.core" gulp.dest:'}),
      $.gulp.dest('build/css'),
      // On production
      $.gp.if(!$.isDevelopment, $.gp.filter('**/*.css')),
      $.gp.if(!$.isDevelopment, $.gp.rename('core.min.css')),
      $.gp.if(!$.isDevelopment, $.gp.cleanCss($.config.cleanCss.prod, function (details) {
        console.log('\x1b[36m%s\x1b[0m', 'Source CSS: ' + details.name + ' Original size: ' + details.stats.originalSize);
        console.log('\x1b[36m%s\x1b[0m', 'Source CSS: ' + details.name + ' Minified size: ' + details.stats.minifiedSize);
      })),
      $.gp.if(!$.isDevelopment, $.gp.debug({title: 'DEBUG "css.core" gulp.dest:'})),
      $.gp.if(!$.isDevelopment, $.gulp.dest('build/css'))
    ).on('error', $.gp.notify.onError(function (err) {
      return {
        title: 'ERROR "css.core":',
        message: err.message
      }
    }));
  });
};