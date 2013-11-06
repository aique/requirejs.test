define(["require", "exports"], function(require, exports) {
    /*
    * Entidad que representa un producto.
    */
    var Product = (function () {
        function Product() {
            this.id = null;
            this.name = null;
            this.description = null;
            this.img = null;
            this.price = 0;
            this.tax = 0;
            this.weight = 0;
        }
        Product.prototype.getId = function () {
            return this.id;
        };

        Product.prototype.setId = function (id) {
            this.id = id;
        };

        Product.prototype.getName = function () {
            return this.name;
        };

        Product.prototype.setName = function (name) {
            this.name = name;
        };

        Product.prototype.getDescription = function () {
            return this.description;
        };

        Product.prototype.setDescription = function (description) {
            this.description = description;
        };

        Product.prototype.getImg = function () {
            return this.img;
        };

        Product.prototype.setImg = function (img) {
            this.img = img;
        };

        Product.prototype.getPrice = function () {
            return this.price;
        };

        Product.prototype.setPrice = function (price) {
            this.price = price;
        };

        Product.prototype.getTax = function () {
            return this.tax;
        };

        Product.prototype.setTax = function (tax) {
            this.tax = tax;
        };

        Product.prototype.getWeight = function () {
            return this.weight;
        };

        Product.prototype.setWeight = function (weight) {
            this.weight = weight;
        };
        return Product;
    })();
    exports.Product = Product;
});
