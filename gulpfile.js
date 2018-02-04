const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const nodemon = require('gulp-nodemon');

gulp.task('js-watch', function () {
  gulp.watch("./client/**/*.js", ['reload']);
});

gulp.task('reload', function(done) {
   browserSync.reload();
   done();
})

gulp.task('serve-client', ['js-watch'], function() {
  browserSync.init({
      server: {
          baseDir: "./",
          index: "client/index.html"
      }
  });
})

gulp.task('server', function() {
  const stream = nodemon({
      script: 'server/js/main.js',
      watch: 'server',
      ext: 'js'
  })

  stream
      .on('restart', function () {
        return gulp.start('reload');
      })
      .on('crash', function() {
        console.error('Application has crashed!\n')
         stream.emit('restart', 10)  // restart the server in 10 seconds
      })
})

gulp.task('default', ['server'], function() {
  gulp.start('serve-client');
});
