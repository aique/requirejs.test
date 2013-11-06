/// <reference path="../def/requirejs.d.ts" />

/// <reference path="./controllers/order.ts" />

import controllers = require("controllers/order");

/*
 * Método main de la sección del carrito de la compra.
 */
require(['jquery'], function($)
{
    controllers.OrderController.init();
});