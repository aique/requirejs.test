requirejs.test
==============

Aplicación modular de ejemplo utilizando Requirejs

Funcionalidad
=============

Actualmente no dispone de un carrito. Una llamada PHP dentro de la sección
order.php simula una respuesta del servidor con el contenido del carrito que
actualmente está asociado al usuario.

Tampoco la funcionalidad de añadir productos desde el menú principal está
implementada. Simplemente muestra un mensaje como ejemplo de la correcta
recepción del evento por parte del código JavaScript.

Secciones
=========

Se compone de dos secciones, una contenida en el fichero index.html que simula
la página principal de la tienda donde se muestran todos los productos
disponibles y otra contenida en el fichero order.php, que simula la sección
de consulta del carrito de la compra.

Estructura de la aplicación
===========================
<pre>
+ js
|
+ --- + app: Además de los siguientes directorios, aquí se almacenarán los ficheros con los métodos main de cada sección
|     |
|     + controllers: En este directorio se encuentran los distintos controladores de la aplicación
|     |
|     + data: En este directorio se encuentran las clases de la capa de datos que se encargan de insertar/obtener/modificar/eliminar información
|     |
|     + model: En este directorio se encuentran las clases que modelan las entidades que manejará la aplicación
|     |
|     + services: En este directorio se encuentran las clases de la capa de negocio
|     |
|     + templates: En este directorio se encuentran las plantillas HTML utilizadas para renderizar contenidos en la capa de la vista
|     |
|     + views: En este directorio se encuentran las clases de la capa de vista
|
|
+ --- + build: En este directorio se almacenarán los ficheros comprimidos tras la compresión. Contendrá lo siguiente
|     |
|     + dist: Directorio en el que se almacenarán los ficheros comprimidos
|     |
|     + r.js: Librería necesaria para la compresión de ficheros.
|     |
|     + build.js: Fichero con la configuración del proceso de compresión.
|
|
+ --- + json: Ficheros JSON de datos (si fueran necesarios)
|
|
+ --- + lib: Ficheros con las librerías JavaScript necesarias. Contendrá al menos las aquí definidas
|     |
|     + jquery.js: Librería jQuery
|     |
|     + requirejs
|     |
|     + --- require.js: Librería Requirejs
|
|
+ --- common.js: Fichero con la configuración de la librería Requirejs
|
|
+ --- text.js: Plugin para la carga de ficheros de texto mediante Requirejs
</pre>