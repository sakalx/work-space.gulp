var autoprefixer = require('autoprefixer'),             // Подключаем Auto Pre-Fixer для добавления префиксов
    browserSync  = require('browser-sync'),             // Подключаем Browser Sync   для обновления браузера
    cssnano 		 = require('cssnano'),              // Подключаем СSS-Nano       для минификации CSS
    gulp 			   = require('gulp'),               // Подключаем Gulp
    cache    	   = require('gulp-cache'),             // Подключаем Cache          для кеширования img
    concat 	     = require('gulp-concat'),              // Подключаем Concat         для склеивания библиотек
    htmlmin      = require('gulp-htmlmin'),             // Подключаем HTML-Mini      для минификации HTML
    imagemin     = require('gulp-imagemin'),            // Подключаем Image-Min      для оптимизации img
    postcss 		 = require('gulp-postcss'),         // Подключаем PostCSS        для парсинга CSS
    rename 		   = require('gulp-rename'),            // Подключаем Rename         для для переименования файлов
    uglify       = require('gulp-uglifyjs'),            // Подключаем Uglify-JS      для сжатия JS
    pngquant     = require('imagemin-pngquant'),        // Подключаем PNG-Quant      для оптимизации PNG
    postcssUnits = require('postcss-units'),            // Подключаем PostCSS-Units  для смены px to rem
    precss 			 = require('precss');               // Подключаем PreCSS         для имитации Sass


//=======================================================================================================
//factory SVG
//=======================================================================================================
var svgmin 		= require('gulp-svgmin'), 					 // Подключаем svgmin         для минимизации SVG
	svgSprite 	= require('gulp-svg-sprite');  			 // Подключаем svg-sprite     для склевание SVG

//configuration for svg-sprite 
configSVG				= {
	shape				: {
        dimension		: {								// Set maximum dimensions 
        	maxWidth	: 32,
        	maxHeight	: 32
        	},
        spacing			: {								// Add padding 
        	padding		: 3
        	},
       // dest			: 'out/intermediate-svg'		// Keep the intermediate files 
       },
       mode			: {
        view			: {								      // Activate the «view» mode 
        	bust		: false,
        	render		: {
                css	: true								// Activate Sass output (with default options) 
              }
              },
        symbol			: true							  // Activate the «symbol» mode 
      }
    };


// Создаем таск svg-min---------------------минифицыруем svg
gulp.task('svgmin', function () {
	return gulp.src('factory-svg/svg/**/*.svg')
	.pipe(svgmin({
    plugins: [{
      removeDoctype: false
      }, {
      removeTitle: true
        }, {
      cleanupNumericValues: {
            floatPrecision: 1
          }
          }]
          }))
	.pipe(gulp.dest('factory-svg/svg-min/'));
	});



// Создаем таск factory SVG---------------------Создаем готовый svg sprite
gulp.task('build-svg', ['svgmin'],
	function () {
		return gulp.src('**/*.svg', {cwd: 'factory-svg/svg-min/'})
		.pipe(svgSprite(configSVG))
		.pipe(gulp.dest('factory-svg'));
		});


//=======================================================================================================
//=======================================================================================================
//=======================================================================================================



// Создаем таск PostCSS---------------------------для обработки CSS
gulp.task('css', function() {
  var processors = [                              // Задаем что должно выполняться
                precss,                           // Возможности писать Sass кодами
                postcssUnits,                     // Замена px на rem, пример: rem(14px) или rem(14)
                autoprefixer({                    // Добавляет префиксы
                	browers: ['last 7 version']
                	})
                ];
                return gulp.src(['!src/postcss/slices/**/*.css', 'src/postcss/**/*.css'])
                .pipe(postcss(processors))
                .pipe(concat('style.css')) 
                .pipe(gulp.dest('src/css'))
  .pipe(browserSync.reload({stream: true}));       // Обновляем CSS на странице при изменении
  });


// Создаем таск Concat + Uglify--------------------для склеивания библиотек и их сжатия
gulp.task('vendor', function() {
    return gulp.src([                                          		// Берем все необходимые библиотеки
		'src/libs/jquery/jquery-3.2.1.min.js',         	  		// Берем jQuery
        //'src/libs/jquery/jquery-ui-1.12.1/jquery-ui.min.js',  	// Берем jQuery-UI
    	'src/libs/anime.js/anime.min.js', 						    // Берем Anime.js
    	'src/libs/parallax.js/parallax.min.js'				        // Берем Parallax.js
    	])
    .pipe(concat('libs.min.js'))                   // Собираем их в кучу в новом файле libs.min.js
    .pipe(uglify())                                // Сжимаем JS файл
    .pipe(gulp.dest('src/js'));                    // Выгружаем в папку src/js
    });


// Создаем таск Concat + Uglify--------------------для склеивания внутрених js и их сжатия
gulp.task('scripts', function() {
    return gulp.src('src/js/slices/**/*.js')       // Берем все наши js файлы с папки slices
    .pipe(concat('main.min.js'))                   // Собираем их в кучу в новом файле main.min.js
    .pipe(uglify())                                // Сжимаем JS файл
    .pipe(gulp.dest('src/js'))                     // Выгружаем в папку src/js
    .pipe(browserSync.reload({stream: true}));     // Обновляем JS на странице при изменении
    });


// Создаем таск Browser Sync----------------------для обновления браузера
gulp.task('browser-sync', function() { 
	browserSync({
                server: {baseDir: 'src'},         // Директория для сервера
                notify: false                     // Отключаем уведомления
                });
	});


// Создаем таск Watch-----------------------------для наблюдения за изменениями
gulp.task('watch', [
	'browser-sync',
	'css',
	'vendor',
	'scripts'
	], function() {
 gulp.watch('src/postcss/**/*.css', ['css']);      // Наблюдение за css файлами в папке postcss
 gulp.watch('src/**/*.html', browserSync.reload);  // Наблюдение за HTML файлами в корне проекта
 gulp.watch('src/js/**/*.js', ['scripts']);        // Наблюдение за JS файлами в папке js

 });




// Создаем таск HTML-Min--------------------------для минификации HTML
gulp.task('htmlmin', function(){
	return gulp.src(['!src/libs/**/*.html', 'src/**/*.html'])
  .pipe(htmlmin({collapseWhitespace: true}))      // Минимизируем  HTML 
  .pipe(gulp.dest('completed'));                  // Выгружаем в готовый проект
  });



// Создаем таск СSS-Nano--------------------------для минификации CSS
gulp.task('cssnano', function() {
	var nano = [
            cssnano                               // Минимизируем CSS
            ];                       
            return gulp.src('src/css/**/*.css')   
       .pipe(postcss(nano))                       // Подкдючаем к PostCSS
       .pipe(rename({suffix: '.min'}))            // Додаем суффикс .min
       .pipe(gulp.dest('completed/css/'));        // Выгружаем в готовый проект
       });


// Создаем таск Img + Cache-----------------------для оптимизации изображений и его кеширования
gulp.task('img', function(){
  return gulp.src('src/img/**/*')              // Берем все изображения из src
  .pipe(cache(imagemin({                          // Сжимаем изображения с учетом кеширования
  	interlaced: true,
  	progressive: true,
  	svgoPlugins: [{removeViewBox: false}],
  	use: [pngquant()]
  	})))
  .pipe(gulp.dest('completed/img'));               // Выгружаем в готовый проект
  });


// Создаем таск Clear Cache------------------------для очистки кеша
gulp.task('cleanCache', function() {
	return cache.clearAll();
	});


// Создаем таск Project Build---------------------Создаем готовый продукт
gulp.task('build', [
                  'cleanCache',                   // Чистим кеш
                  'img',                          // Запускаем таск Img + Cache
                  'css',                          // Запускаем таск CSS
                  'vendor',                       // Запускаем таск Vendor
                  'scripts',                      // Запускаем таск Scripts
                  'htmlmin',                      // Запускаем таск HTML-Min
                  'cssnano'                       // Запускаем таск CSS-Nano
                  ], function(){

      gulp.src('src/font/**/*')                  // Переносим шрифты в готовый продукт
      .pipe(gulp.dest('completed/font'));

      gulp.src(['src/js/**/*.js', '!src/js/slices/**/*.js', '!src/js/ES6/**/*.js']) 
      .pipe(gulp.dest('completed/js'));           // Переносим мини-скрипты в готовый продукт
      });

gulp.task('default', ['stream']);