/// <reference path="../services/storeServices.ts" />
/// <reference path="../views/productView.ts" />
define(["require", "exports", "services/storeServices", "views/productView"], function(require, exports, __services__, __views__) {
    var services = __services__;
    var views = __views__;

    /*
    * Controlador de la sección principal (listado de productos).
    */
    var StoreController = (function () {
        function StoreController() {
        }
        StoreController.init = /*
        * Método main de la sección, que se ejecuta cada vez que el usuario entra
        * en ella.
        *
        * Su tarea es cargar el listado de productos de los que dispone la tienda
        * y que están definidos en un fichero json.
        *
        * Se ha utilizado un fichero en la parte cliente simplemente para
        * ejemplificar una carga de datos desde este lado, sin tener que acceder
        * al servidor. No obstante, lo habitual sería realizar una llamada ajax
        * al servidor desde la capa de datos para obtener esta información.
        */
        function () {
            views.ProductView.printProductList(services.StoreServices.loadStoreData());
        };
        return StoreController;
    })();
    exports.StoreController = StoreController;
});
