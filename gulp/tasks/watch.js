module.exports = function () {
  $.gulp.task('watch', function () {
    $.isWatch = true;

    if ($.isDevelopment) {
      //sources.json
      $.gulp.watch(['sources.json'], $.gulp.series($.gulp.parallel('css.core', 'css.blocks', 'js.core'), function (done) {
        $.browserSync.reload(['build/css/**/*.css', 'build/js/**/*.js']);
        done();
      }));

      //templates
      $.gulp.watch('sources/**/*.pug', $.gulp.series('templates', $.gulp.parallel('css.blocks', 'js.blocks'), function (done) {
        $.browserSync.reload('build/*.html');
        done();
      })).on('all', (event, filepath) => {
        event !== 'unlink' ? $.pugChangedFile = filepath : undefined;
      });

      //css.core
      $.gulp.watch(['sources/**/*.{css,scss}', '!sources/blocks/**'], $.gulp.series('css.core', function (done) {
        $.browserSync.reload('build/css/core.css');
        done();
      }));

      //css.blocks
      $.gulp.watch(JSON.parse($.fs.readFileSync('sources.json')).cssHelpers.concat(['sources/blocks/**/*.{css,scss}']),
        $.gulp.series('css.blocks', function (done) {
          $.browserSync.reload('build/css/blocks.css');
          done();
        })
      );

      //js.core
      $.gulp.watch(['sources/**/*.js', '!sources/blocks/**'], $.gulp.series('js.core', function (done) {
        $.browserSync.reload('build/js/core.js');
        done();
      }));

      //js.blocks
      $.gulp.watch(['sources/blocks/**/*.js'], $.gulp.series('js.blocks', function (done) {
        $.browserSync.reload('build/js/blocks.js');
        done();
      }));
    }
    else {
      //sources.json
      $.gulp.watch(['sources.json'], $.gulp.series($.gulp.parallel('css.app', 'js.app'), function (done) {
        $.browserSync.reload(['build/css/**/*.css', 'build/js/**/*.js']);
        done();
      }));

      //templates
      $.gulp.watch('sources/**/*.pug', $.gulp.series('templates', $.gulp.parallel('css.app', 'js.app'), function (done) {
        $.browserSync.reload('build/*.html');
        done();
      })).on('all', (event, filepath) => {
        event !== 'unlink' ? $.pugChangedFile = filepath : undefined;
      });

      //css.app
      $.gulp.watch(['sources/**/*.{css,scss}'], $.gulp.series('css.app', function (done) {
        $.browserSync.reload('build/css/**/*.css');
        done();
      }));

      //js.app
      $.gulp.watch(['sources/**/*.js'], $.gulp.series('js.app', function (done) {
        $.browserSync.reload('build/js/**/*.js');
        done();
      }));
    }

    //img
    $.gulp.watch(['sources/img/**/*.{png,jp*g,gif,svg}'], $.gulp.series('img', function (done) {
      $.browserSync.reload('build/img/**');
      done();
    }));

    //fontello
    $.gulp.watch(['sources/fonts/fontello/config.json'], $.gulp.series('fontello'));

    //fonts
    $.gulp.watch(['sources/fonts/**/*.{woff*,ttf,eot,svg}'], $.gulp.series('fonts', function (done) {
      $.browserSync.reload('build/fonts/**');
      done();
    }));

    //assets
    $.gulp.watch(['sources/assets/**/*.*'], $.gulp.series('assets'), function (done) {
      $.browserSync.reload('build/assets/**');
      done();
    });
  });
};