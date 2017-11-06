'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config.js'),
  gulp: require('gulp'),
  gp: require('gulp-load-plugins')(),
  combiner: require('stream-combiner2').obj,
  del: require('del'),
  browserSync: require('browser-sync').create(),
  emittyPug: require('emitty').setup('sources', 'pug'),
  map: require('map-stream'),
  fs: require('fs'),
  sassInlineImage: require('sass-inline-image'),
  path: require('path'),
  getClassesFromHtml: require('get-classes-from-html'),
  imageminJpegoptim: require('imagemin-jpegoptim'),
  imageminMozjpeg: require('imagemin-mozjpeg'),

  blocksObj: {},
  blocksArr: [],

  isDevelopment: process.env.NODE_ENV !== 'production',
  isWatch: false
};

$.config.tasks.forEach(function (taskPath) {
  require(taskPath)();
});