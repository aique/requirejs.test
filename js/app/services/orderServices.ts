/// <reference path="../data/orderData.ts" />
/// <reference path="../data/productData.ts" />
/// <reference path="../model/order.ts" />
/// <reference path="../model/product.ts" />
/// <reference path="../model/orderProduct.ts" />

import orderData = require("data/orderData");
import productData = require("data/productData");
import orderModel = require("model/order");
import productModel = require("model/product");
import orderProductModel = require("model/orderProduct");

/*
 * Capa de negocio de la entidad pedido.
 * 
 * Su tarea es obtener los datos necesarios para realizar una determinada
 * operación, procesarlos de manera conveniente y devolverlos al controlador,
 * que será quien decida qué hacer con ellos.
 */
export class OrderServices
{
    /*
     * Obtiene mediante una llamada a la capa de datos la información
     * de los productos y cantidades que componen el pedido.
     * 
     * Una vez la ha obtenido, hace los cálculos necesarios para establecer
     * el precio de cada fila del pedido, así como el precio final del mismo.
     * 
     * De esta manera se aisla la lógica del contenido del controlador, cuya
     * tarea simplemente ha de ser la de llamar a los procesos necesarios para
     * obtener los datos requieridos, procesarlos de manera adecuada y mostrarlos
     * al usuario.
     */
    public static loadOrderData(): orderModel.Order
    {
        // Obtención de los datos
        var order: orderModel.Order = orderData.OrderData.getOrder();
        
        // Lógica necesaria para procesar la información obtenida antes de
        // ser mostrada al usuario
        var orderProducts: orderProductModel.OrderProduct[] = order.getOrderProducts();
        
        var numOrderProd: number = orderProducts.length;
        
        var orderProductPrice: number = 0;
        var finalPrice: number = 0;
        
        for(var i: number = 0 ; i < numOrderProd ; i++)
        {
            orderProductPrice = orderProducts[i].getProduct().getPrice() * orderProducts[i].getUnits();
            
            orderProducts[i].setPrice(orderProductPrice);
            
            finalPrice += orderProductPrice;
        }
        
        order.setPrice(finalPrice);
        
        return order;
    }
    
    /*
     * Aumenta en una unidad el número de productos de la fila de
     * pedido correspondiente al producto cuyo identificador se
     * recibe como parámetro.
     * 
     * Dado que no existe carrito propiamente dicho en este ejemplo,
     * simplemente obtendrá la definición del producto y actualizará
     * las unidades que recibe como parámetro, el precio de la fila
     * del pedido, y el precio final del pedido.
     */
    public static updateProductUnits(productId: number, currentUnits: number, orderPrice: number, increment: boolean): orderModel.Order
    {
        var order: orderModel.Order = new orderModel.Order();
        
        // Obtención de los datos
        var product: productModel.Product = productData.ProductData.getProduct(productId);
        
        // Lógica necesaria para procesar la información obtenida antes de
        // ser mostrada al usuario
        
        var units: number = currentUnits;
        
        if(increment)
        {
            units = currentUnits + 1;
            order.setPrice(orderPrice + product.getPrice());
        }
        else
        {
            if(currentUnits > 1)
            {
                units = currentUnits - 1;
                order.setPrice(orderPrice - product.getPrice());
            }
            else
            {
                return null;
            }
        }
        
        var orderProduct: orderProductModel.OrderProduct = new orderProductModel.OrderProduct();
        
        orderProduct.setProduct(product);
        orderProduct.setUnits(units);
        orderProduct.setPrice(product.getPrice() * units);
        
        order.setOrderProducts(new Array(orderProduct));
        
        return order;
    }
    
    /*
     * Realiza la llamada al método adecuado de la clase data para realizar
     * la eliminación del producto dentro del pedido del usuario.
     * 
     * Dado que esta es una tarea de la capa de datos (actualización de los
     * datos del pedido), esta será la encargada de llevarla a cabo, a pesar
     * de que se trate de una llamada ajax al servidor.
     * 
     * La ubicación de las responsabilidades debe ser independiente a cómo
     * se lleva a cabo la acción en sí misma. De esta forma se conseguirá
     * mantener un criterio constante en la separación de responsabilidades.
     */
    public static removeProduct(): boolean
    {
        var success: boolean = orderData.OrderData.removeProduct();
        
        return success;
    }
}