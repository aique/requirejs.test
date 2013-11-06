/// <reference path="../services/orderServices.ts" />
/// <reference path="../views/orderView.ts" />
define(["require", "exports", "services/orderServices", "views/orderView"], function(require, exports, __services__, __views__) {
    /// <reference path="../../def/requirejs.d.ts" />
    var services = __services__;
    var views = __views__;

    /*
    * Controlador de la sección carrito de la compra.
    */
    var OrderController = (function () {
        function OrderController() {
        }
        OrderController.init = /*
        * Método main de la sección, que se ejecuta cada vez que el usuario entra
        * en ella.
        *
        * Su tarea es cargar el listado de productos que el usuario lleva
        * acumulados en el carrito y mostrarlos de manera conveniente.
        */
        function () {
            views.OrderView.printOrder(services.OrderServices.loadOrderData());
        };

        OrderController.updateProductUnits = /*
        * Actualiza las unidades de un producto que se encuentra en el carrito
        * del usuario.
        *
        * Este evento se dispara cuando el usuario pulsa en las acciones de
        * aumentar o disminuir las unidades de un determinado producto que se
        * encuentra en el carrito.
        *
        * Llama al método de la capa de negocio encargada de realizar esta
        * operación y en función de su respuesta actualiza o no los datos del
        * pedido que está visualizando el usuario.
        */
        function (productId, currentUnits, orderPrice, increase) {
            var orderTmp = services.OrderServices.updateProductUnits(productId, currentUnits, orderPrice, increase);

            if (orderTmp) {
                var orderProductsTmp = orderTmp.getOrderProducts();

                views.OrderView.renderOrderProduct(orderProductsTmp[0]);
                views.OrderView.updateOrderPrice(orderTmp);
            }
        };

        OrderController.removeProduct = /*
        * Elimina un producto del carrito del usuario.
        *
        * Este evento se dispara cuando el usuario pulsa en la acción de
        * eliminar un determinado producto que se encuentra en el carrito.
        *
        * Llama al método de la capa de negocio encargada de realizar esta
        * operación y en función de su respuesta actualizalos datos del pedido
        * o muestra un error conveniente alertando de que la operación no ha
        * podido llevarse a cabo.
        */
        function (productId) {
            var success = services.OrderServices.removeProduct();

            if (success) {
                views.OrderView.removeOrderProduct(productId);
            } else {
                views.OrderView.showError('El producto no se ha podido eliminar');
            }
        };
        return OrderController;
    })();
    exports.OrderController = OrderController;
});
