/*
 * Entidad que representa un pedido.
 */
define([], function ()
{
    var Order = function()
    {
        var orderProducts = new Array();
        var price = 0;
        
        this.getOrderProducts = function()
        {
            return orderProducts;
        };
        
        this.setOrderProducts = function(newOrderProducts)
        {
            orderProducts = newOrderProducts;
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
 
    return Order;
});