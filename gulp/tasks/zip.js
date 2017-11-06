module.exports = function () {
  $.gulp.task('zip', function () {
    return $.gulp.src('build/**')
      .pipe($.gp.zip(`${$.package.name.toLowerCase()}-${$.package.version}.zip`))
      .pipe($.gp.debug({title: 'DEBUG "zip" gulp.dest:'}))
      .pipe($.gulp.dest('build'));
  });
};