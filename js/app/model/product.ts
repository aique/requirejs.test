/*
 * Entidad que representa un producto.
 */
export class Product
{
    private id: number;
    private name: string;
    private description: string;
    private img: string;
    private price: number;
    private tax: number;
    private weight: number;

    constructor()
    {
        this.id = null;
        this.name = null;
        this.description = null;
        this.img = null;
        this.price = 0;
        this.tax = 0;
        this.weight = 0;
    }

    public getId(): number
    {
        return this.id;
    }

    public setId(id: number): void
    {
        this.id = id;
    }

    public getName(): string
    {
        return this.name;
    }

    public setName(name: string): void
    {
        this.name = name;
    }

    public getDescription(): string
    {
        return this.description;
    }

    public setDescription(description: string): void
    {
        this.description = description;
    }

    public getImg(): string
    {
        return this.img;
    }

    public setImg(img: string): void
    {
        this.img = img;
    }

    public getPrice(): number
    {
        return this.price;
    }

    public setPrice(price: number): void
    {
        this.price = price;
    }

    public getTax(): number
    {
        return this.tax;
    }

    public setTax(tax: number): void
    {
        this.tax = tax;
    }

    public getWeight(): number
    {
        return this.weight;
    }

    public setWeight(weight: number): void
    {
        this.weight = weight;
    }
}