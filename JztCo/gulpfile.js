var gulp       	= require('gulp'),
		sass        = require('gulp-sass'), 
		browserSync = require('browser-sync'), 
		concat 			= require('gulp-concat');


gulp.task('browser-sync', function() {
	// browserSync({ 
	// 	server: { 
	// 		baseDir: 'app' 
	// 	},
	// 	notify: false,
	// 	host: 'localhost',
	// 	port: 8080
	// });
});

gulp.task('sass', function(){ 
	return gulp.src('app/scss/**/*.scss') 
		.pipe(sass()) 
		.pipe(gulp.dest('app/css'))
		// .pipe(browserSync.reload({stream: true}))
});

gulp.task('css-libs', function() {
  // return gulp.src(['app/libs/leaflet/leaflet.css'])
  //   .pipe(concat('libs.min.css'))
  //   .pipe(gulp.dest('app/css'));
});

gulp.task('script-libs', function() {
  // return gulp.src(['app/libs/leaflet/leaflet.js'])
  //   .pipe(concat('libs.min.js'))
  //   .pipe(gulp.dest('app/js'));
});

gulp.task('watch', ['browser-sync', 'sass', 'css-libs', 'script-libs'], function() {
	gulp.watch('app/scss/**/*.scss', ['sass']);
	gulp.watch('app/**/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});