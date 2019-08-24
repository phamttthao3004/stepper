const gulp = require('gulp');
const less = require('gulp-less');
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');

const paths = {
	styles: {
		src: './src/styles/style.less',
		dest: './src/styles',
	},
};
function styles_less() {
	return gulp
		.src(paths.styles.src, {
			sourcemaps: true,
		})
		.pipe(less())
		.pipe(
			rename({
				basename: 'style',
				suffix: '',
			})
		)
		.pipe(cleanCSS({ debug: true }))
		.pipe(concat('style.css'))
		.pipe(gulp.dest(paths.styles.dest));
}
// watch
function watch_less() {
	gulp.watch(paths.styles.src, styles_less);
}
const build = gulp.parallel(styles_less, watch_less);

gulp.task(build);
gulp.task('default', build);
