process.env.SUPPRESS_NO_CONFIG_WARNING = 'y';

const gulp = require('gulp');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const parse = require('@loopify-jfrog-public/gulp-loopify-document-parse');
const render = require('@loopify-jfrog-public/gulp-loopify-document-render');

gulp.task('default', ['build']);

gulp.task('build', () => {
	return gulp.src('src/document.ts')
	.pipe(parse())
	.pipe(rename('document.json'))
	.pipe(gulp.dest('tmp/'))
	.pipe(render())
	.pipe(rename('index.html'))
	.pipe(gulp.dest('tmp/'));
});

gulp.task('serve', () => {
	browserSync({
		notify: false,
		port: 1337,
		tunnel: true,
		cors: true,
		logPrefix: 'Loopify Template',
		server: {
			baseDir: 'tmp'
		}
	});

	gulp.watch([
		'tmp/**/*'
	]).on('change', reload);

	gulp.watch([
		'src/**/*'
	], ['default']);
});