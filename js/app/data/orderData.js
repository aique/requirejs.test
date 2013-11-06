/* Con la siguiente llamada se importan las variables globales definidas en js */
/// <amd-dependency path="orderData" />
define(["require", "exports", "model/order", "model/orderProduct", "data/productData", "orderData"], function(require, exports, __orderModel__, __orderProductModel__, __productData__) {
    /* Librerías necesarias */
    /// <reference path="../model/order.ts" />
    /// <reference path="../model/orderProduct.ts" />
    /// <reference path="../data/productData.ts" />
    var orderModel = __orderModel__;
    var orderProductModel = __orderProductModel__;
    var productData = __productData__;

    /*
    * Capa de datos de la entidad pedido.
    *
    * Desde aquí se realizarán todas las operaciones de alta, baja, consulta y
    * modificación de la información relativa a esta entidad.
    *
    * Esto se realizará bien accediendo a ficheros de la parte cliente o bien
    * realizando peticiones ajax al servidor.
    */
    var OrderData = (function () {
        function OrderData() {
        }
        OrderData.getOrder = /*
        * Obtiene la información de un pedido a partir de la información json
        * devuelta por el servidor.
        */
        function () {
            var orderProducts = [];

            var orderData = require("orderData");

            // Para este caso en concreto, el listado de productos se ha definido en
            // una variable desde la vista (index.html, lin.24). Se ha hecho así para
            // ejemplificar un paso de parámetros definidos en el momento en el que
            // PHP pinta la vista. No obstante, lo más habitual sería una llamada
            // ajax al servidor que devolviera los productos en formato json.
            var data = $.parseJSON(orderData.value);

            var numOrderProducts = data.order.length;

            for (var i = 0; i < numOrderProducts; i++) {
                var orderProduct = new orderProductModel.OrderProduct();

                // Se obtiene la información del producto a través de
                // la clase que lo recupera su definición del json
                orderProduct.setProduct(productData.ProductData.getProduct(parseInt(data.order[i].product)));

                orderProduct.setUnits(data.order[i].units);

                orderProducts.push(orderProduct);
            }

            var order = new orderModel.Order();

            order.setOrderProducts(orderProducts);

            return order;
        };

        OrderData.removeProduct = /*
        * Elimina un producto del carrito de la compra del usuario. Para hacerlo
        * realiza una llamada ajax a un fichero PHP que será el encargado de
        * eliminar esta información de la base de datos y devolver el resultado.
        */
        function () {
            var success = false;

            $.ajax({
                url: '/ajax/remove_order_product_on_server.php',
                async: false
            }).done(function (data) {
                var response = $.parseJSON(data);

                if (response.result === 'ok') {
                    success = true;
                }
            });

            return success;
        };
        return OrderData;
    })();
    exports.OrderData = OrderData;
});
