/*
 * Entidad que representa un producto.
 */
define([], function ()
{
    var Product = function()
    {
        var id = null;
        var name = null;
        var description = null;
        var img = null;
        var price = 0;
        var tax = 0;
        var weight = 0;
        
        this.getId = function()
        {
            return id;
        };
        
        this.setId = function(newId)
        {
            id = newId;
        };
        
        this.getName = function()
        {
            return name;
        };
        
        this.setName = function(newName)
        {
            name = newName;
        };
        
        this.getDescription = function()
        {
            return description;
        };
        
        this.setDescription = function(newDescription)
        {
            description = newDescription;
        };
        
        this.getImg = function()
        {
            return img;
        };
        
        this.setImg = function(newImg)
        {
            img = newImg;
        };
        
        this.getPrice = function()
        {
            return price;
        };
        
        this.setPrice = function(newPrice)
        {
            price = newPrice;
        };
        
        this.getTax = function()
        {
            return tax;
        };
        
        this.setTax = function(newTax)
        {
            tax = newTax;
        };
        
        this.getWeight = function()
        {
            return weight;
        };
        
        this.setWeight = function(newWeight)
        {
            weight = newWeight;
        };
    };
 
    return Product;
});