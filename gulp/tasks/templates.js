module.exports = function () {
  function getBlocksFile(file) {
    const tempName = file.stem;
    Array.isArray($.blocksObj[tempName]) ? $.blocksObj[tempName].splice(0, $.blocksObj[tempName].length) : $.blocksObj[tempName] = [];
    $.getClassesFromHtml(file.contents.toString()).forEach(function (className, i, arr) {
      ($.blocksObj[tempName].indexOf(className) === -1) && (className.indexOf('__') === -1)
      && (className.indexOf('--') === -1) && $.blocksObj[tempName].push(className);
    });
    return file;
  }

  $.gulp.task('templates', $.gulp.series(
    function getHtml() {
      return new Promise((resolve, reject) => {
        $.emittyPug.scan($.pugChangedFile).then(() => {
          $.gulp.src('sources/templates/*.pug')
            .pipe($.gp.if($.isWatch, $.emittyPug.filter($.pugChangedFile)))
            .pipe($.gp.pug({
              locals: {
                $: {
                  package: $.package,
                  config: $.config,
                  faviconCode: JSON.parse($.fs.readFileSync($.config.favicon.markupFile)).favicon.html_code,
                  isDevelopment: $.isDevelopment
                }
              }
            }))
            .pipe($.map(function (file, cb) {
              cb(null, getBlocksFile(file))
            }))
            .pipe($.gp.prettify({indent_inner_html: true, indent_size: 2, unformatted: ['pre', 'code']}))
            .pipe($.gp.debug({title: 'DEBUG "templates" gulp.dest:'}))
            .pipe($.gulp.dest('build'))
            .on('end', resolve)
            .on('error', reject)
            .on('error', $.gp.notify.onError(function (err) {
              return {
                title: 'ERROR "templates":',
                message: err.message
              }
            }));
        });
      })
    },
    function getBlocksArr(done) {
      $.blocksArr.splice(0, $.blocksArr.length);
      for (let tempName in $.blocksObj) if ($.blocksObj.hasOwnProperty(tempName)) {
        $.blocksObj[tempName].forEach(function (className) {
          ($.blocksArr.indexOf('sources/blocks/' + className) === -1) && $.blocksArr.push('sources/blocks/' + className);
        });
      }
      console.log('\x1b[36m%s', 'Blocks Object:');
      console.log('\x1b[34m%o', $.blocksObj);
      console.log('\x1b[36m%s', 'Blocks Array:');
      console.log('\x1b[34m%o\x1b[0m', $.blocksArr);
      done();
    }
  ));
};