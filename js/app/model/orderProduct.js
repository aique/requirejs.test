/*
 * Entidad que representa un producto añadido al pedido.
 * 
 * Además del producto también cuenta con el número de unidades que se han
 * solicitado de él y el precio total de este conjunto de productos.
 */
define([], function ()
{
    var OrderProduct = function()
    {
        var product = null;
        var units = 0;
        var price = 0;
        
        this.getProduct = function()
        {
            return product;
        };
        
        this.setProduct = function(newProduct)
        {
            product = newProduct;
        };
        
        this.getUnits = function()
        {
            return units;
        };
        
        this.setUnits = function(newUnits)
        {
            units = newUnits;
        };
        
        this.getPrice = function()
        {
            return price;
        };
        
        this.setPrice = function(newPrice)
        {
            price = newPrice;
        };
    };
 
    return OrderProduct;
});