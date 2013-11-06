/// <reference path="../data/orderData.ts" />
/// <reference path="../data/productData.ts" />
/// <reference path="../model/order.ts" />
/// <reference path="../model/product.ts" />
/// <reference path="../model/orderProduct.ts" />
define(["require", "exports", "data/orderData", "data/productData", "model/order", "model/orderProduct"], function(require, exports, __orderData__, __productData__, __orderModel__, __orderProductModel__) {
    var orderData = __orderData__;
    var productData = __productData__;
    var orderModel = __orderModel__;
    
    var orderProductModel = __orderProductModel__;

    /*
    * Capa de negocio de la entidad pedido.
    *
    * Su tarea es obtener los datos necesarios para realizar una determinada
    * operación, procesarlos de manera conveniente y devolverlos al controlador,
    * que será quien decida qué hacer con ellos.
    */
    var OrderServices = (function () {
        function OrderServices() {
        }
        OrderServices.loadOrderData = /*
        * Obtiene mediante una llamada a la capa de datos la información
        * de los productos y cantidades que componen el pedido.
        *
        * Una vez la ha obtenido, hace los cálculos necesarios para establecer
        * el precio de cada fila del pedido, así como el precio final del mismo.
        *
        * De esta manera se aisla la lógica del contenido del controlador, cuya
        * tarea simplemente ha de ser la de llamar a los procesos necesarios para
        * obtener los datos requieridos, procesarlos de manera adecuada y mostrarlos
        * al usuario.
        */
        function () {
            // Obtención de los datos
            var order = orderData.OrderData.getOrder();

            // Lógica necesaria para procesar la información obtenida antes de
            // ser mostrada al usuario
            var orderProducts = order.getOrderProducts();

            var numOrderProd = orderProducts.length;

            var orderProductPrice = 0;
            var finalPrice = 0;

            for (var i = 0; i < numOrderProd; i++) {
                orderProductPrice = orderProducts[i].getProduct().getPrice() * orderProducts[i].getUnits();

                orderProducts[i].setPrice(orderProductPrice);

                finalPrice += orderProductPrice;
            }

            order.setPrice(finalPrice);

            return order;
        };

        OrderServices.updateProductUnits = /*
        * Aumenta en una unidad el número de productos de la fila de
        * pedido correspondiente al producto cuyo identificador se
        * recibe como parámetro.
        *
        * Dado que no existe carrito propiamente dicho en este ejemplo,
        * simplemente obtendrá la definición del producto y actualizará
        * las unidades que recibe como parámetro, el precio de la fila
        * del pedido, y el precio final del pedido.
        */
        function (productId, currentUnits, orderPrice, increment) {
            var order = new orderModel.Order();

            // Obtención de los datos
            var product = productData.ProductData.getProduct(productId);

            // Lógica necesaria para procesar la información obtenida antes de
            // ser mostrada al usuario
            var units = currentUnits;

            if (increment) {
                units = currentUnits + 1;
                order.setPrice(orderPrice + product.getPrice());
            } else {
                if (currentUnits > 1) {
                    units = currentUnits - 1;
                    order.setPrice(orderPrice - product.getPrice());
                } else {
                    return null;
                }
            }

            var orderProduct = new orderProductModel.OrderProduct();

            orderProduct.setProduct(product);
            orderProduct.setUnits(units);
            orderProduct.setPrice(product.getPrice() * units);

            order.setOrderProducts(new Array(orderProduct));

            return order;
        };

        OrderServices.removeProduct = /*
        * Realiza la llamada al método adecuado de la clase data para realizar
        * la eliminación del producto dentro del pedido del usuario.
        *
        * Dado que esta es una tarea de la capa de datos (actualización de los
        * datos del pedido), esta será la encargada de llevarla a cabo, a pesar
        * de que se trate de una llamada ajax al servidor.
        *
        * La ubicación de las responsabilidades debe ser independiente a cómo
        * se lleva a cabo la acción en sí misma. De esta forma se conseguirá
        * mantener un criterio constante en la separación de responsabilidades.
        */
        function () {
            var success = orderData.OrderData.removeProduct();

            return success;
        };
        return OrderServices;
    })();
    exports.OrderServices = OrderServices;
});
