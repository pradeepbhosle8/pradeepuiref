import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sass',
  templateUrl: './sass.component.html',
  styleUrls: ['./sass.component.css']
})
export class SassComponent implements OnInit {

  sasssetup = `
  var gulp = require('gulp');
  var sass = require('gulp-sass');
  var cleanCSS = require('gulp-clean-css');
  var uglify = require('gulp-uglify');
  var concat = require('gulp-concat');
  var imagemin = require('gulp-imagemin');
  var browserSync = require('browser-sync').create();

  /* gulp tasks */

// compiler sass files to stylesheet
gulp.task('sass', function() {
	return gulp.src('src/sass/style.scss')
		   .pipe(sass())
		   //.pipe(cleanCSS({compatibility: 'ie8'}))
		   .pipe(gulp.dest('dist/css'))	
		   .pipe(browserSync.stream());
});

// Minify JavaScript 
gulp.task('minify-js', function() {
	return gulp.src('src/js/*.js')
		   .pipe(uglify())
		   .pipe(concat('app.js'))
		   .pipe(gulp.dest('dist/js'))
});

// images minify 
gulp.task('image-mini', function() 
{	return gulp.src('src/img/*')
		   .pipe(imagemin())
		   .pipe(gulp.dest('dist/images'))
});

// Static server
gulp.task('browser-sync', function() {
	browserSync.init({
        server: {
            baseDir: "../"
        }
    });
    gulp.watch("src/sass/*.scss", gulp.series('sass')) ;
    gulp.watch("src/js/*.js", gulp.series('minify-js')) ;
    gulp.watch("../*.html").on('change', browserSync.reload);
    gulp.watch("../pages/*.html").on('change', browserSync.reload);
});

gulp.task('default', gulp.series('sass', 'minify-js', 'image-mini', 'browser-sync'));
  `;

  sassVariable = `
  new file called partial Sass  _varialbe.scss
  /*==Variable===*/
  $primaryColor:#007bff;
  $topbarcolor:#e1e1e1;
  $sectionHeader:24px;

  and main scss file
  @import 'variable';
  .box{
    color:$primaryColor;
  }
.topbar-section{
  background-color:$toparcolor;
}

section h1{
  font-size:$sectionHeader;
}

  `;

  sassNestingstyle = `
  #main-nav{
    bacground:$primaryColor;
    ul{
      width:100%;
        li{ ...code here... }
        a{ ...code here...}
        &:after{...code here...}
        &:before{...code here...}
    }
  }

  or eg.
  nav {
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  
    li { display: inline-block; }
  
    a {
      display: block;
      padding: 6px 12px;
      text-decoration: none;
    }
  }
  `;

  sassMixins =  `
  @mixin transform($property) {
    -webkit-transform: $property;
    -ms-transform: $property;
    transform: $property;
  }
  
  .box { @include transform(rotate(30deg)); }


  css file code...

  .box {
    -webkit-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    transform: rotate(30deg);
  }
  `;


  sassExtendInheritance = `
  /* This CSS will print because %message-shared is extended. */
%message-shared {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

// This CSS won't print because %equal-heights is never extended.
%equal-heights {
  display: flex;
  flex-wrap: wrap;
}

.message {
  @extend %message-shared;
}

.success {
  @extend %message-shared;
  border-color: green;
}

.error {
  @extend %message-shared;
  border-color: red;
}

.warning {
  @extend %message-shared;
  border-color: yellow;
}

css file code ...
.message, .success, .error, .warning {
  border: 1px solid #ccc;
  padding: 10px;
  color: #333;
}

.success {
  border-color: green;
}

.error {
  border-color: red;
}

.warning {
  border-color: yellow;
}
  `;


  sassOperators = `
  .container {
    width: 100%;
  }
  
  article[role="main"] {
    float: left;
    width: 600px / 960px * 100%;
  }
  
  aside[role="complementary"] {
    float: right;
    width: 300px / 960px * 100%;
  }

  css file code..
  .container {
    width: 100%;
  }
  
  article[role="main"] {
    float: left;
    width: 62.5%;
  }
  
  aside[role="complementary"] {
    float: right;
    width: 31.25%;
  }
  `;

  constructor() { }

  ngOnInit() {
  }



}
