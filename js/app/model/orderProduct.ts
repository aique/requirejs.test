/// <reference path="./product.ts" />

import model = require("model/product");

/*
 * Entidad que representa un producto añadido al pedido.
 * 
 * Además del producto también cuenta con el número de unidades que se han
 * solicitado de él y el precio total de este conjunto de productos.
 */
export class OrderProduct
{
    private product: model.Product;
    private units: number;
    private price: number;

    public constructor()
    {
        this.product = null;
        this.units = 0;
        this.price = 0;
    }

    public getProduct(): model.Product
    {
        return this.product;
    }

    public setProduct(product: model.Product): void
    {
        this.product = product;
    }

    public getUnits(): number
    {
        return this.units;
    }

    public setUnits(units: number): void
    {
        this.units = units;
    }

    public getPrice(): number
    {
        return this.price;
    }

    public setPrice(price: number): void
    {
        this.price = price;
    }
}