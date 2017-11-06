module.exports = {
  project: {
    name: 'Наша Фабрика'
  },
  tasks: [
    "./gulp/tasks/clean.js",
    "./gulp/tasks/templates.js",
    "./gulp/tasks/favicon.js",
    "./gulp/tasks/css.core.js",
    "./gulp/tasks/css.blocks.js",
    "./gulp/tasks/css.app.js",
    "./gulp/tasks/js.core.js",
    "./gulp/tasks/js.blocks.js",
    "./gulp/tasks/js.app.js",
    "./gulp/tasks/img.js",
    "./gulp/tasks/fontello.js",
    "./gulp/tasks/fonts.js",
    "./gulp/tasks/assets.js",
    "./gulp/tasks/server.js",
    "./gulp/tasks/watch.js",
    "./gulp/tasks/zip.js",
    "./gulp/tasks/default.js",
    "./gulp/tasks/production.js"
  ],
  autoprefixer: {
    browsers: ['last 2 versions', 'ie >= 10'],
    add: true,
    remove: true,
    cascade: false
  },
  cleanCss: {
    dev: {
      format: 'beautify',
      level: {
        1: {
          all: false,
          cleanupCharsets: true
        }
      },
      debug: true
    },
    prod: {
      level: 1,
      debug: true
    }
  },
  babel: {
    presets: [
      [
        'env',
        {
          modules: false
        }
      ]
    ]
  },
  favicon: {
    masterPicture: 'sources/favicon/favicon.svg',
    design: {
      ios: {
        pictureAspect: 'backgroundAndMargin',
        backgroundColor: '#ffffff',
        margin: '35%',
        assets: {
          ios6AndPriorIcons: false,
          ios7AndLaterIcons: false,
          precomposedIcons: false,
          declareOnlyDefaultIcon: true
        }
      },
      desktopBrowser: {},
      windows: {
        pictureAspect: 'whiteSilhouette',
        backgroundColor: '#da3d39',
        onConflict: 'override',
        assets: {
          windows80Ie10Tile: false,
          windows10Ie11EdgeTiles: {
            small: false,
            medium: true,
            big: false,
            rectangle: false
          }
        }
      },
      androidChrome: {
        pictureAspect: 'shadow',
        themeColor: '#ffffff',
        manifest: {
          name: 'Valenok.Ru',
          display: 'standalone',
          orientation: 'notSet',
          onConflict: 'override',
          declared: true
        },
        assets: {
          legacyIcon: false,
          lowResolutionIcons: false
        }
      },
      safariPinnedTab: {
        pictureAspect: 'silhouette',
        themeColor: '#da3d39'
      }
    },
    markupFile: 'sources/favicon/faviconData.json'
  }
};