<?php

    // Simulo una llamada al servidor para obtener
    // los datos del pedido en formato JSON
    
    $orderData = '{"order": [{"product": "001", "units": "1"}, {"product": "003", "units": "2"}]}';

?>

<!DOCTYPE html>

<html>
    
    <head>
        
        <title></title>
        
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        
        <script data-main="js/order" src="/js/lib/requirejs/require.js"></script>
        
        <script type="text/javascript">
        
            define('orderData', {value: '<?php echo $orderData; ?>'});
            
        </script>
        
    </head>
    
    <body>
        
        <h1>Mi tienda</h1>
        
        <h2>Su pedido</h2>
        
        <table border="1">
            
            <thead>
                
                <tr>
                    
                    <th>Producto</th>
                    
                    <th>Unidades</th>
                    
                    <th>Precio</th>
                    
                    <th>Acciones</th>
                    
                </tr>
                
            </thead>
        
            <tbody id="store_products_list">
                
                <tr>
                    <td colspan="2">Total</td><td><span id="final_price"></span> €</td><td></td>
                </tr>
                
            </tbody>
            
        </table>
        
        <a href="index.html">Volver</a>
        
    </body>
    
</html>
