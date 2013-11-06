/// <amd-dependency path="text!templates/order.html" />
define(["require", "exports", "controllers/order", "text!templates/order.html"], function(require, exports, __controllers__) {
    
    
    var controllers = __controllers__;

    /*
    * Capa de vista de la entidad pedido.
    */
    var OrderView = (function () {
        function OrderView() {
        }
        OrderView.loadActions = /*
        * Define la funcionalidad de las acciones asociadas
        * a un producto dentro del carrito del usuario.
        */
        function (html) {
            html.find(".increase_product").on("click", function (e) {
                e.preventDefault();

                var productId = parseFloat($(this).attr("data-productid"));
                var currentUnits = parseFloat($(this).closest("tr").find(".units").text());
                var orderPrice = parseFloat($("#final_price").text());

                controllers.OrderController.updateProductUnits(productId, currentUnits, orderPrice, true);
            });

            html.find(".decrease_product").on("click", function (e) {
                e.preventDefault();

                var productId = parseFloat($(this).attr("data-productid"));
                var currentUnits = parseFloat($(this).closest("tr").find(".units").text());
                var orderPrice = parseFloat($("#final_price").text());

                controllers.OrderController.updateProductUnits(productId, currentUnits, orderPrice, false);
            });

            html.find(".remove_product").on("click", function (e) {
                e.preventDefault();

                var productId = parseInt($(this).attr("data-productid"));

                controllers.OrderController.removeProduct(productId);
            });
        };

        OrderView.printOrder = /*
        * Imprime todos los productos que se encuentran dentro del
        * carrito en el listado del pedido del usuario.
        */
        function (order) {
            var orderTemplate = require("text!templates/order.html");

            // Iteramos a través de los productos mediante la función map y
            // devolvemos el valor de la platilla con los valores sustituidos
            var buffer = $.map(order.getOrderProducts(), function (productData, index) {
                var product = $(orderTemplate).clone();

                product.find(".product_name").text(productData.getProduct().getName());
                product.find(".units").text(productData.getUnits());
                product.find(".price").text(productData.getPrice());

                var productId = productData.getProduct().getId();

                product.find(".increase_product").attr("data-productid", productId);
                product.find(".decrease_product").attr("data-productid", productId);
                product.find(".remove_product").attr("data-productid", productId);

                OrderView.loadActions(product);

                return product.get();
            });

            $("#store_products_list tr:first").before(buffer);

            $("#final_price").text(order.getPrice());
        };

        OrderView.renderOrderProduct = /*
        * Actualiza el valor de una determinada fila del pedido a partir de la
        * información contenida en el objeto que recibe como parámetro.
        */
        function (orderProduct) {
            var orderDataRow = $("a[data-productid = " + orderProduct.getProduct().getId() + "]").closest("tr");

            orderDataRow.find(".units").text(orderProduct.getUnits());
            orderDataRow.find(".price").text(orderProduct.getPrice());
        };

        OrderView.removeOrderProduct = /*
        * Elimina una fila de la tabla de productos que componen el pedido.
        *
        * Se ejecutará si la acción de eliminación de un producto dentro del
        * pedido tiene éxito.
        */
        function (productId) {
            var orderDataRow = $("a[data-productid = " + productId + "]").closest("tr");
            var orderProductPrice = parseFloat($(orderDataRow).find(".price").text());

            orderDataRow.remove();

            var finalPriceField = $("#final_price");

            $(finalPriceField).text(parseFloat($(finalPriceField).text()) - orderProductPrice);
        };

        OrderView.updateOrderPrice = /*
        * Actualiza el campo del precio final del pedido.
        */
        function (order) {
            $("#final_price").text(order.getPrice());
        };

        OrderView.showError = /*
        * Método genérico que muestra un error al usuario en la pantalla
        * del carrito.
        *
        * Actualmente sólo muestra un alert, sin embargo podría incluir
        * un elemento html con un estilo apropiado para un resultado más
        * adecuado de la alerta de error.
        */
        function (message) {
            alert(message);
        };
        return OrderView;
    })();
    exports.OrderView = OrderView;
});
