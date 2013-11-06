/// <reference path="./def/requirejs.d.ts" />

/*
 * Fichero que ha de incluirse en la sección order, que representa
 * la página del carrito de la compra del usuario.
 * 
 * Carga la configuración de la librería requirejs y llama al fichero
 * js que hace la función de método main de la sección.
 */

require(['js/common.js'],
function(common)
{
    require(['app/order']);
});