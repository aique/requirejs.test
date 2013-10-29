/*
 * Capa de datos de la entidad producto.
 * 
 * Desde aquí se realizarán todas las operaciones de alta, baja, consulta y
 * modificación de la información relativa a esta entidad.
 * 
 * Esto se realizará bien accediendo a ficheros de la parte cliente o bien
 * realizando peticiones ajax al servidor.
 */

/*
 * Carga el fichero json con la definición de productos en su primer parámetro
 */
define(["text!json/store_products_definition.json", "model/product"], function (productData, Product)
{
    var ProductData = function()
    {
        
    };
    
    /*
     * Obtiene todos los prouctos que se encuentran definidos en el json
     * definido en la declaración del módulo.
     */
    ProductData.getProducts = function()
    {
        var products = [];
    
        var data = $.parseJSON(productData);
        
        var numProducts = data.products.length;

        for(var i = 0 ; i < numProducts ; i++)
        {
            var product = new Product();

            product.setId(data.products[i].id);
            product.setName(data.products[i].name);
            product.setDescription(data.products[i].description);
            product.setImg(data.products[i].img);
            product.setPrice(data.products[i].price);
            product.setTax(data.products[i].tax);
            product.setWeight(data.products[i].weight);

            products.push(product);
        }
        
        return products;
    };
    
    /*
     * Obtiene los datos de un producto dentro de su definición en el
     * fichero json a partir del identificador del mismo.
     */
    ProductData.getProduct = function(productId)
    {
        var product = null;
        
        var data = $.parseJSON(productData);
        
        var numProducts = data.products.length;

        for(var i = 0 ; i < numProducts && !product ; i++)
        {
            if(data.products[i].id === productId)
            {
                product = new Product();

                product.setId(data.products[i].id);
                product.setName(data.products[i].name);
                product.setDescription(data.products[i].description);
                product.setImg(data.products[i].img);
                product.setPrice(data.products[i].price);
                product.setTax(data.products[i].tax);
                product.setWeight(data.products[i].weight);
            }
        }
        
        return product;
    };
 
    return ProductData;
});