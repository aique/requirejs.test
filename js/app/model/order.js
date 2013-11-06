/// <reference path="./orderProduct.ts" />
define(["require", "exports"], function(require, exports) {
    

    /*
    * Entidad que representa un pedido.
    */
    var Order = (function () {
        function Order() {
        }
        Order.prototype.constructor = function () {
            this.orderProducts = [];
            this.price = 0;
        };

        Order.prototype.getOrderProducts = function () {
            return this.orderProducts;
        };

        Order.prototype.setOrderProducts = function (orderProducts) {
            this.orderProducts = orderProducts;
        };

        Order.prototype.getPrice = function () {
            return this.price;
        };

        Order.prototype.setPrice = function (price) {
            this.price = price;
        };
        return Order;
    })();
    exports.Order = Order;
});
