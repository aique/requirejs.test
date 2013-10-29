/**
 * Método main de la sección principal de la tienda.
 */
require(['jquery', 'controllers/store'],
function($, StoreController)
{
    StoreController.init();
});