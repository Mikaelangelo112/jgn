var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var watch = require('gulp-watch');
var watch = require('gulp-css-scss');
//task para o sass
gulp.task('sass',function(){
	  return sass('./sass/**/*.sass')
	.pipe(gulp.dest('./CSS'));

});

gulp.task('css-scss',function(){
	return sass('./SASS/**/*.scss')
	.pipe(gulp.dest('./CSS'));

});
//task para o watch


gulp.task('watch',function(){
	gulp.watch('./SASS/**/*.scss', ['css-scss']);
});
gulp.task('watch',function(){
	gulp.watch('./SASS/**/*.sass', ['sass']);
});
//task default gulp
gulp.task('default', ['sass','css-scss','watch']);