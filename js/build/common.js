

/*
 * En este fichero se incluye la configuración de la librería requirejs.
 */

/*
 * El siguiente código que se encuentra comentado se utilizará en el momento
 * de pasar la aplicación a desarrollo. Antes de hacerlo, se comprimirán los
 * ficheros JS con las instrucciones apropiadas y será este código el ejecutado
 * por este fichero, el cual cargará el fichero comprimido con todo el código
 * JS perteneciente a la aplicación.
 */

/*

require.config(
{
    baseUrl: 'js',
    paths:
    {
        main: "build/dist/main-built"
    }
});

require(["main"]);

*/

requirejs.config(
{
    baseUrl: 'js',
    paths: {
        controllers: 'app/controllers',
        services: 'app/services',
        data: 'app/data',
        model: 'app/model',
        views: 'app/views',
        templates: 'app/templates',
        jquery: 'lib/jquery'
    }
});
define("common", function(){});
