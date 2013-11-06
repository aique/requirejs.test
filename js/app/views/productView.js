/// <amd-dependency path="text!templates/product.html" />
define(["require", "exports", "text!templates/product.html"], function(require, exports) {
    

    /*
    * Capa de vista de la entidad producto.
    */
    var ProductView = (function () {
        function ProductView() {
        }
        ProductView.loadActions = /*
        * Define la funcionalidad de las acciones asociadas
        * a un producto.
        */
        function (html) {
            html.find(".add_product").on("click", function (e) {
                e.preventDefault();

                alert("Producto con ID " + $(this).attr("data-productid") + " añadido");
            });
        };

        ProductView.printProductList = /*
        * Imprime todos los productos en el listado principal
        * de la tienda.
        */
        function (products) {
            var productTemplate = require("text!templates/product.html");

            // Iteramos a través de los productos mediante la función map y
            // devolvemos el valor de la platilla con los valores sustituidos
            var buffer = $.map(products, function (productData, index) {
                var product = $(productTemplate).clone();

                product.find("#product_name").text(productData.getName());
                product.find("#unit_price").text(productData.getPrice());
                product.find(".add_product").attr("data-productid", productData.getId());

                ProductView.loadActions(product);

                return product.get();
            });

            var productsList = $("#store_products_list");

            productsList.append(buffer);
        };
        return ProductView;
    })();
    exports.ProductView = ProductView;
});
