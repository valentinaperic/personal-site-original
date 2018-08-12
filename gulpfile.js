var gulp = require('gulp');
var less = require('gulp-less'); 
var minify = require('gulp-clean-css'); 
var rename = require('gulp-rename'); 


gulp.task('less', function() {  
  gulp.src('./build/css/app.less')
    .pipe(less())
    .pipe(gulp.dest('./public/assets/css'));
}); 

gulp.task('minify-css',['less'], function () {
    gulp.src('./public/assets/css/app.css')
		.pipe(rename('app.min.css'))
		.pipe(minify())
		.pipe(gulp.dest('./public/assets/css/'));
	
});


gulp.task('copy-blog-files', function() {
    //copy blog files and point them to firebase public
    gulp.src('./gatsby-site/gatsby-blog/public/**/*').pipe(gulp.dest('./public/blog'));
});

gulp.task('default', ['minify-css', 'copy-blog-files']);