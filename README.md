requirejs.test
==============

Aplicación modular de ejemplo utilizando Requirejs

Estructura
==========
<pre>
+ js
|
+ --- + app
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
      |
      + jquery.js: Librería jQuery
      |
      + requirejs
      |
      + --- require.js: Librería Requirejs
</pre>