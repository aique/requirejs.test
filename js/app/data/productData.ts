/* Con la siguiente llamada se carga el fichero JSON de texto especificado */
/// <amd-dependency path="text!json/store_products_definition.json" />

/* Librerías necesarias */

/// <reference path="../model/product.ts" />

import model = require("model/product");

/*
 * Capa de datos de la entidad producto.
 * 
 * Desde aquí se realizarán todas las operaciones de alta, baja, consulta y
 * modificación de la información relativa a esta entidad.
 * 
 * Esto se realizará bien accediendo a ficheros de la parte cliente o bien
 * realizando peticiones ajax al servidor.
 */

export class ProductData
{
    /*
     * Obtiene todos los prouctos que se encuentran definidos en el json
     * definido en la declaración del módulo.
     */
    public static getProducts(): model.Product[]
    {
        var products: model.Product[] = [];

        /*
         * Carga el fichero json con la definición de productos en su primer parámetro
         */
        var productData: string = require("text!json/store_products_definition.json");
        var data = $.parseJSON(productData);
        
        var numProducts: number = data.products.length;

        for(var i = 0 ; i < numProducts ; i++)
        {
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
    }

    /*
     * Obtiene los datos de un producto dentro de su definición en el
     * fichero json a partir del identificador del mismo.
     */
    public static getProduct(productId: number): model.Product
    {
        var product: model.Product = null;

        /*
         * Carga el fichero json con la definición de productos en su primer parámetro
         */
        var productData: string = require("text!json/store_products_definition.json");
        var data = $.parseJSON(productData);

        var numProducts: number = data.products.length;

        for(var i: number = 0 ; i < numProducts && !product ; i++)
        {
            if(parseInt(data.products[i].id) === productId)
            {
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
    }
}
