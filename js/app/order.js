/// <reference path="../def/requirejs.d.ts" />
define(["require", "exports", "controllers/order"], function(require, exports, __controllers__) {
    /// <reference path="./controllers/order.ts" />
    var controllers = __controllers__;

    /*
    * Método main de la sección del carrito de la compra.
    */
    require(['jquery'], function ($) {
        controllers.OrderController.init();
    });
});
