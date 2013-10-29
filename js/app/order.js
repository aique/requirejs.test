/**
 * Método main de la sección del carrito de la compra.
 */
require(['jquery', 'controllers/order'],
function($, OrderController)
{
    OrderController.init();
});