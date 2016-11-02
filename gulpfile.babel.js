import gulp from 'gulp';
import jasmine from 'gulp-jasmine';
import istanbul from 'gulp-istanbul';
import { Instrumenter } from 'isparta';

const tasks = ['test'];

gulp.task('test', cb => {
  gulp.src(['./actions/**/*.js', './components/**/*.js', './containers/**/*.js', './reducers/**/*.js', './routes/**/*.js', './entry.js', './index.js', './routes.js', './server.js'])
    .pipe(istanbul({
      instrumenter: Instrumenter,
      includeUntested: true,
    }))
    .pipe(istanbul.hookRequire())
    .on('finish', () => {
      gulp.src(['./spec/**.js'])
        .pipe(jasmine({
          verbose: true,
          errorOnFail: false
        }))
        .pipe(istanbul.writeReports({
          dir: './coverage',
          reporters: ['lcov', 'text'],
          reportOpts: { dir: './coverage' },
        }))
        .on('finish', cb);
    });
});

gulp.task('default', tasks);
