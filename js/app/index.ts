/// <reference path="../def/requirejs.d.ts" />

/// <reference path="./controllers/store.ts" />

import controllers = require("controllers/store");

/*
 * Método main de la sección principal de la tienda.
 */
require(['jquery'], function($)
{
    controllers.StoreController.init();
});