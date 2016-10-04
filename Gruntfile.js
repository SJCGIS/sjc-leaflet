/*global module:false*/

var swPrecache = require('sw-precache')
var path = require('path')
var packageJson = require('./package.json')
var LIVERELOAD_PORT = 35729
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT })
var mountFolder = function (connect, dir) {
  return connect['static'](require('path').resolve(dir))
}
module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    browserify: {
      dist: {
        src: ['src/js/*.js', 'src/js/**/*.js', '!src/js/ga.js', '!src/js/maptiks.js', '!src/js/*.secret.*'],
        dest: 'dist/js/L.App.js'
      },
      options: {
        browserifyOptions: {
          debug: true
        }
      }
    },
    connect: {
      options: {
        port: 9000,
        // change this to '0.0.0.0' to access the server from outside
        hostname: 'localhost'
      },
      dev: {
        options: {
          base: 'dist'
        }
      },
      prod: {
        options: {
          base: 'dist'
        }
      }
    },
    copy: {
      main: {
        src: 'src/service-worker-registration.js',
        dest: 'dist/service-worker-registration.js'
      },
      images: {
        cwd: 'node_modules',
        dest: 'dist/img/',
        src: [
          'leaflet/dist/images/*',
          'esri-leaflet-geocoder/dist/img/*',
          'drmonty-leaflet-awesome-markers/css/images/*'
        ],
        flatten: true,
        expand: true
      },
      css: {
        files: [{
          cwd: 'node_modules',
          expand: true,
          src: ['leaflet/dist/leaflet.css'],
          dest: 'node_modules/leaflet/dist/leaflet.scss'
        }]
      }
    },
    cssmin: {
      options: {
        sourceMap: false
      },
      target: {
        files: {
          'dist/css/app.min.css': ['dist/css/app_pure.css']
        }
      }
    },
    focus: {
      dev: {
        include: ['htmldev', 'stylesheets', 'jsdev', 'tests']
      },
      prod: {
        include: ['htmlprod', 'stylesheets', 'jsprod', 'tests']
      }
    },
    'gh-pages': {
      options: { base: 'src' },
      src: ['**']
    },
    jshint: {
      options: { jshintrc: true },
      all: ['src/js/**/*.js']
    },
    //Open default browser at the app
    open: {
      dev: { path: 'http://localhost:<%= connect.options.port %>/' },
      prod: { path: 'http://localhost:<%= connect.options.port %>/' }
    },
    processhtml: {
      prod: {
        files: {
          'dist/index.html': ['src/index.html']
        }
      },
      dev: {
        files: {
          'dist/index.html': ['src/index.html']
        }
      }
    },
    sass: {
      options: {
        style: 'compressed',
        includePaths: ['node_modules']
      },
      dist: {
        files: {
          'dist/css/app.css': 'src/sass/site.scss'
        }
      }
    },
    swPrecache: {
      prod: {
        handleFetch: true,
        rootDir: 'dist'
      }
    },
    tape: {
      options: {
        pretty: true,
        output: 'console'
      },
      files: [ 'test/spec/**/*.js']
    },
    uglify: {
      app: {
        options: {
          compress: {
            drop_console: true
          },
          mangle: true,
          sourceMap: false
        },
        files: {
          'dist/js/L.App.min.js': ['dist/js/L.App.js']
        }
      }
    },
    //setup watch tasks
    watch: {
      options: {
        nospan: true,
        livereload: LIVERELOAD_PORT
      },
      htmldev: {
        files: ['src/index.html'],
        tasks: ['processhtml:dev']
      },
      htmlprod: {
        files: ['src/index.html'],
        tasks: ['processhtml:prod']
      },
      stylesheets: {
        files: ['src/sass/**/*.scss'],
        tasks: ['sass']
      },
      jsdev: {
        files: ['src/js/*.js', 'src/js/**/*.js'],
        tasks: ['js:dev']
      },
      jsprod: {
        files: ['src/js/*.js', 'src/js/**/*.js'],
        tasks: ['js:prod']
      },
      tests: {
        files: ['spec/**/*.js'],
        tasks: ['test']
      },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        }
      }
    }
  })

  function writeServiceWorkerFile (rootDir, handleFetch, cb) {
    var config = {
      cacheId: packageJson.name,
      handleFetch: handleFetch,
      logger: grunt.log.writeIn,
      staticFileGlobs: [
        rootDir + '/*.html',
        rootDir + '/css/app.css',
        rootDir + '/img/**/*.+(gif|png|jpg)',
        rootDir + '/js/*.min.js'
      ],
      stripPrefix: rootDir + '/',
      runtimeCaching: [],
      verbose: true
    }

    swPrecache.write(path.join(rootDir, 'service-worker.js'), config, cb)
  }


  grunt.loadNpmTasks('grunt-browserify')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-connect')
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-contrib-cssmin')
  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-uglify')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-focus')
  grunt.loadNpmTasks('grunt-tape')
  grunt.loadNpmTasks('grunt-open')
  grunt.loadNpmTasks('grunt-processhtml')
  grunt.loadNpmTasks('grunt-sass')

  // Tasks
  grunt.registerTask('hint', ['jshint'])
  grunt.registerTask('test', ['tape'])

  //JS
  grunt.registerTask('js:dev', ['jshint', 'browserify', 'test'])
  grunt.registerTask('js:prod', ['browserify', 'uglify', 'test'])

  // CSS
  grunt.registerTask('css:dev', ['copy:css', 'sass'])
  grunt.registerTask('css:prod', ['copy:css', 'sass'])

  // Assets
  grunt.registerTask('assets:dev', ['copy:images', 'copy:main'])
  grunt.registerTask('assets:prod', ['copy:images', 'copy:main'])

  // Build wrappers
  grunt.registerTask('build:dev', ['js:dev', 'assets:dev', 'processhtml:dev', 'css:dev', 'swPrecache'])
  grunt.registerTask('build:prod', ['js:prod', 'assets:prod', 'processhtml:prod', 'css:prod', 'swPrecache'])
  // Serve locally on :8000
  grunt.registerTask('serve:dev', ['connect:dev', 'focus:dev'])
  grunt.registerTask('serve:prod', ['connect:prod', 'focus:prod'])
  // Overall build targets... dev and prod.  Default to dev
  grunt.registerTask('dev', ['build:dev', 'serve:dev'])
  grunt.registerTask('prod', ['build:prod', 'serve:prod'])
  grunt.registerTask('default', ['dev'])

  grunt.registerMultiTask('swPrecache', function () {
    var done = this.async()
    var rootDir = this.data.rootDir
    var handleFetch = this.data.handleFetch

    writeServiceWorkerFile(rootDir, handleFetch, function (err) {
      if (err) {
        grunt.fail.warn(err)
      }
      done()
    })
  })
}
