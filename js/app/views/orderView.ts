/// <amd-dependency path="text!templates/order.html" />

/// <reference path="../model/order.ts" />
/// <reference path="../model/orderProduct.ts" />
/// <reference path="../controllers/order.ts" />

/// <reference path="../../def/requirejs.d.ts" />
/// <reference path="../../def/jquery.d.ts" />

import orderModel = require("model/order");
import orderProductModel = require("model/orderProduct");
import controllers = require("controllers/order");

/*
 * Capa de vista de la entidad pedido.
 */
export class OrderView
{
    /*
     * Define la funcionalidad de las acciones asociadas
     * a un producto dentro del carrito del usuario.
     */
    public static loadActions(html): void
    {
        html.find(".increase_product").on("click", function(e)
        {
           e.preventDefault();
           
           var productId: number = parseFloat($(this).attr("data-productid"));
           var currentUnits: number = parseFloat($(this).closest("tr").find(".units").text());
           var orderPrice: number = parseFloat($("#final_price").text());
               
           controllers.OrderController.updateProductUnits(productId, currentUnits, orderPrice, true);
        });
        
        html.find(".decrease_product").on("click", function(e)
        {
           e.preventDefault();
           
           var productId: number = parseFloat($(this).attr("data-productid"));
           var currentUnits: number = parseFloat($(this).closest("tr").find(".units").text());
           var orderPrice: number = parseFloat($("#final_price").text());
               
           controllers.OrderController.updateProductUnits(productId, currentUnits, orderPrice, false);
        });
        
        html.find(".remove_product").on("click", function(e)
        {
           e.preventDefault();
           
           var productId: number = parseInt($(this).attr("data-productid"));
               
           controllers.OrderController.removeProduct(productId);
        });
    }
    
    /*
     * Imprime todos los productos que se encuentran dentro del
     * carrito en el listado del pedido del usuario.
     */
    public static printOrder(order: orderModel.Order): void
    {
        var orderTemplate: string = require("text!templates/order.html");

        // Iteramos a través de los productos mediante la función map y
        // devolvemos el valor de la platilla con los valores sustituidos
        var buffer = $.map(
            order.getOrderProducts(),
            function(productData, index)
            {
                var product = $(orderTemplate).clone();

                product.find(".product_name").text(productData.getProduct().getName());
                product.find(".units").text(productData.getUnits());
                product.find(".price").text(productData.getPrice());
                
                var productId: number = productData.getProduct().getId();
                
                product.find(".increase_product").attr("data-productid", productId);
                product.find(".decrease_product").attr("data-productid", productId);
                product.find(".remove_product").attr("data-productid", productId);
                
                OrderView.loadActions(product);

                return product.get();
            }
        );
        
        $("#store_products_list tr:first").before(buffer);
        
        $("#final_price").text(order.getPrice());
    }
    
    /*
     * Actualiza el valor de una determinada fila del pedido a partir de la
     * información contenida en el objeto que recibe como parámetro.
     */
    public static renderOrderProduct(orderProduct: orderProductModel.OrderProduct): void
    {
        var orderDataRow = $("a[data-productid = " + orderProduct.getProduct().getId() + "]").closest("tr");
        
        orderDataRow.find(".units").text(orderProduct.getUnits());
        orderDataRow.find(".price").text(orderProduct.getPrice());
    }
    
    /*
     * Elimina una fila de la tabla de productos que componen el pedido.
     * 
     * Se ejecutará si la acción de eliminación de un producto dentro del
     * pedido tiene éxito.
     */
    public static removeOrderProduct(productId: number): void
    {
        var orderDataRow = $("a[data-productid = " + productId + "]").closest("tr");
        var orderProductPrice: number = parseFloat($(orderDataRow).find(".price").text());
        
        orderDataRow.remove();
        
        var finalPriceField = $("#final_price");
        
        $(finalPriceField).text(parseFloat($(finalPriceField).text()) - orderProductPrice);
    }
    
    /*
     * Actualiza el campo del precio final del pedido.
     */
    public static updateOrderPrice(order: orderModel.Order): void
    {
        $("#final_price").text(order.getPrice());
    }
    
    /*
     * Método genérico que muestra un error al usuario en la pantalla
     * del carrito.
     * 
     * Actualmente sólo muestra un alert, sin embargo podría incluir
     * un elemento html con un estilo apropiado para un resultado más
     * adecuado de la alerta de error.
     */
    public static showError(message: string): void
    {
        alert(message);
    }
}