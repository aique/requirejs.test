/// <reference path="./def/requirejs.d.ts" />
/*
* Fichero que ha de incluirse en la sección index, que representa
* la página principal de la tienda con su listado de artículos.
*
* Carga la configuración de la librería requirejs y llama al fichero
* js que hace la función de método main de la sección.
*/
//require(['/js/dist/common.js'], Descomentar esta línea y comentar la siguiente en el paso a producción para usar la version minimizada
require(['/js/common.js'], function (common) {
    require(['app/index']);
});
//# sourceMappingURL=index.js.map
