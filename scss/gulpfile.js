//requireed stuff
var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	gls = require('gulp-live-server');


gulp.task('serve', function(){
	var server = gls.static();
	server.start();

	var server = gls.static('dist',1755);
	server.start();

	var server= gls.static(['dist','.tmp']);
	server.start();


	gulp.watch(['static/**/*.css', 'static/**/*html'], function(){
	server.notify.apply(server,arguments);
});
});





//scripts task
gulp.task('scripts',function(){
	console.log('Task completed');
	gulp.src('js/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('/js'));
});


//watch task for auto completion
//gulp.task('watch',function(){
	//gulp.watch('js/*.js',['scripts']);
//});

//default task
gulp.task('default',['scripts']);