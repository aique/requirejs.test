/// <reference path="../def/requirejs.d.ts" />
define(["require", "exports", "controllers/store"], function(require, exports, __controllers__) {
    /// <reference path="./controllers/store.ts" />
    var controllers = __controllers__;

    /*
    * Método main de la sección principal de la tienda.
    */
    require(['jquery'], function ($) {
        controllers.StoreController.init();
    });
});
