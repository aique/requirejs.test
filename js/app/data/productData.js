/* Con la siguiente llamada se carga el fichero JSON de texto especificado */
/// <amd-dependency path="text!json/store_products_definition.json" />
define(["require", "exports", "model/product", "text!json/store_products_definition.json"], function(require, exports, __model__) {
    /* Librerías necesarias */
    /// <reference path="../model/product.ts" />
    var model = __model__;

    /*
    * Capa de datos de la entidad producto.
    *
    * Desde aquí se realizarán todas las operaciones de alta, baja, consulta y
    * modificación de la información relativa a esta entidad.
    *
    * Esto se realizará bien accediendo a ficheros de la parte cliente o bien
    * realizando peticiones ajax al servidor.
    */
    var ProductData = (function () {
        function ProductData() {
        }
        ProductData.getProducts = /*
        * Obtiene todos los prouctos que se encuentran definidos en el json
        * definido en la declaración del módulo.
        */
        function () {
            var products = [];

            /*
            * Carga el fichero json con la definición de productos en su primer parámetro
            */
            var productData = require("text!json/store_products_definition.json");
            var data = $.parseJSON(productData);

            var numProducts = data.products.length;

            for (var i = 0; i < numProducts; i++) {
                var product = new model.Product();

                product.setId(parseInt(data.products[i].id));
                product.setName(data.products[i].name);
                product.setDescription(data.products[i].description);
                product.setImg(data.products[i].img);
                product.setPrice(parseFloat(data.products[i].price));
                product.setTax(parseFloat(data.products[i].tax));
                product.setWeight(parseFloat(data.products[i].weight));

                products.push(product);
            }

            return products;
        };

        ProductData.getProduct = /*
        * Obtiene los datos de un producto dentro de su definición en el
        * fichero json a partir del identificador del mismo.
        */
        function (productId) {
            var product = null;

            /*
            * Carga el fichero json con la definición de productos en su primer parámetro
            */
            var productData = require("text!json/store_products_definition.json");
            var data = $.parseJSON(productData);

            var numProducts = data.products.length;

            for (var i = 0; i < numProducts && !product; i++) {
                if (parseInt(data.products[i].id) === productId) {
                    product = new model.Product();

                    product.setId(parseInt(data.products[i].id));
                    product.setName(data.products[i].name);
                    product.setDescription(data.products[i].description);
                    product.setImg(data.products[i].img);
                    product.setPrice(parseFloat(data.products[i].price));
                    product.setTax(parseFloat(data.products[i].tax));
                    product.setWeight(parseFloat(data.products[i].weight));
                }
            }

            return product;
        };
        return ProductData;
    })();
    exports.ProductData = ProductData;
});
