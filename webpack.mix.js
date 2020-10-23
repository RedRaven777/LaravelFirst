const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
	.version()
    .sass('resources/sass/app.sass', 'public/css')
    .options({
        processCssUrls: true
    });

// var browserSync = require("browser-sync").create();

// *
//  * This example will serve files from the './app' directory
//  * and will automatically watch for html/css/js changes
 
// browserSync.init({
// 	watch: true,
// 	online: true,
// 	tunnel: true,
// 	injectChanges: false,
// 	server: ["resources", "public"]
// });


mix.browserSync({
   proxy: "resources"
});