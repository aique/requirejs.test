/*
 * Controlador de la sección carrito de la compra.
 */
define([], function()
{
    var OrderController = function()
    {
        
    };
    
    /*
     * Método main de la sección, que se ejecuta cada vez que el usuario entra
     * en ella.
     * 
     * Su tarea es cargar el listado de productos que el usuario lleva
     * acumulados en el carrito y mostrarlos de manera conveniente.
     */
    OrderController.init = function()
    {
        require(["services/orderServices", "views/orderView"], function(OrderServices, OrderView)
        {
            OrderView.printOrder(OrderServices.loadOrderData());
        });
    };
    
    /*
     * Actualiza las unidades de un producto que se encuentra en el carrito
     * del usuario.
     * 
     * Este evento se dispara cuando el usuario pulsa en las acciones de
     * aumentar o disminuir las unidades de un determinado producto que se
     * encuentra en el carrito.
     * 
     * Llama al método de la capa de negocio encargada de realizar esta
     * operación y en función de su respuesta actualiza o no los datos del
     * pedido que está visualizando el usuario.
     */
    OrderController.updateProductUnits = function(productId, currentUnits, orderPrice, increase)
    {
        require(["services/orderServices", "views/orderView"], function(OrderServices, OrderView)
        {
            var orderTmp = OrderServices.updateProductUnits(productId, currentUnits, orderPrice, increase);
            
            if(orderTmp)
            {
                var orderProductsTmp = orderTmp.getOrderProducts();

                OrderView.renderOrderProduct(orderProductsTmp[0]);
                OrderView.updateOrderPrice(orderTmp);
            }
        });
    };
    
    /*
     * Elimina un producto del carrito del usuario.
     * 
     * Este evento se dispara cuando el usuario pulsa en la acción de
     * eliminar un determinado producto que se encuentra en el carrito.
     * 
     * Llama al método de la capa de negocio encargada de realizar esta
     * operación y en función de su respuesta actualizalos datos del pedido
     * o muestra un error conveniente alertando de que la operación no ha
     * podido llevarse a cabo.
     */
    OrderController.removeProduct = function(productId)
    {
        require(["services/orderServices", "views/orderView"], function(OrderServices, OrderView)
        {
            var success = OrderServices.removeProduct(productId);
            
            if(success)
            {
                OrderView.removeOrderProduct(productId);
            }
            else
            {
                OrderView.showError('El producto no se ha podido eliminar');
            }
        });
    };
 
    return OrderController;
});