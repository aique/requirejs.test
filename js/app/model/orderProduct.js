/// <reference path="./product.ts" />
define(["require", "exports"], function(require, exports) {
    

    /*
    * Entidad que representa un producto añadido al pedido.
    *
    * Además del producto también cuenta con el número de unidades que se han
    * solicitado de él y el precio total de este conjunto de productos.
    */
    var OrderProduct = (function () {
        function OrderProduct() {
        }
        OrderProduct.prototype.constructor = function () {
            this.product = null;
            this.units = 0;
            this.price = 0;
        };

        OrderProduct.prototype.getProduct = function () {
            return this.product;
        };

        OrderProduct.prototype.setProduct = function (product) {
            this.product = product;
        };

        OrderProduct.prototype.getUnits = function () {
            return this.units;
        };

        OrderProduct.prototype.setUnits = function (units) {
            this.units = units;
        };

        OrderProduct.prototype.getPrice = function () {
            return this.price;
        };

        OrderProduct.prototype.setPrice = function (price) {
            this.price = price;
        };
        return OrderProduct;
    })();
    exports.OrderProduct = OrderProduct;
});
