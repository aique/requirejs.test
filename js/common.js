
/*
 * En este fichero se incluye la configuración de la librería requirejs.
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