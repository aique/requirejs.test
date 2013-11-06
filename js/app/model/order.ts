/// <reference path="./orderProduct.ts" />

import model = require("model/orderProduct");

/*
 * Entidad que representa un pedido.
 */
export class Order
{
    private orderProducts: model.OrderProduct[];
    private price: number;

    public constructor()
    {
        this.orderProducts = [];
        this.price = 0;
    }
        
    public getOrderProducts(): model.OrderProduct[]
    {
        return this.orderProducts;
    }

    public setOrderProducts(orderProducts: model.OrderProduct[]): void
    {
        this.orderProducts = orderProducts;
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