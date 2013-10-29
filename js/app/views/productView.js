/*
 * Capa de vista de la entidad producto.
 */
define(["text!templates/product.html"], function (productTemplate)
{
    var ProductView = function()
    {
        
    };
    
    /*
     * Define la funcionalidad de las acciones asociadas
     * a un producto.
     */
    ProductView.loadActions = function(html)
    {
        html.find(".add_product").on("click", function(e)
        {
           e.preventDefault();
           
           alert("Producto con ID " + $(this).attr("data-productid") + " añadido");
        });
    };
    
    /*
     * Imprime todos los productos en el listado principal
     * de la tienda.
     */
    ProductView.printProductList = function(products)
    {
        // Iteramos a través de los productos mediante la función map y
        // devolvemos el valor de la platilla con los valores sustituidos
        var buffer = $.map(
            products,
            function(productData, index)
            {
                var product = $(productTemplate).clone();

                product.find("#product_name").text(productData.getName());
                product.find("#unit_price").text(productData.getPrice());
                product.find(".add_product").attr("data-productid", productData.getId());
                
                ProductView.loadActions(product);

                return product.get();
            }
        );
        
        
        var productsList = $("#store_products_list");
        
        productsList.append(buffer);
    };
 
    return ProductView;
});