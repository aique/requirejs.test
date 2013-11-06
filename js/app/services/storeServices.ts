/// <reference path="../data/productData.ts" />
/// <reference path="../model/product.ts" />

import data = require("data/productData");
import model = require("model/product");

/*
 * Capa de negocio de la entidad tienda.
 * 
 * Su tarea es obtener los datos necesarios para realizar una determinada
 * operación, procesarlos de manera conveniente y devolverlos al controlador,
 * que será quien decida qué hacer con ellos.
 */
export class StoreServices
{
    /*
     * Obtiene los productos existentes en la tienda y los devuelve sin
     * realizar ningún procesamiento con estos datos.
     * 
     * En ocasiones la capa de negocio no necesita procesar los datos que
     * obtiene. Simplemente es un puente entre el controlador y la capa de
     * datos.
     * 
     * Pese a que es un paso innecesario en un principio, es probable
     * que a medida que la aplicación crezca sí se requiera cierta lógica, con
     * lo que la estructura ya estaría preparada para ello.
     */
    public static loadStoreData(): model.Product[]
    {
        return data.ProductData.getProducts();
    }
}