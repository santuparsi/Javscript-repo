class Product
{
    constructor(id,name,price,stock)
    {
        this.id=id;
        this.name=name;
        this.price=price;
        this.stock=stock;
    }
    details()
    {
        console.log(`Id:${this.id} Name:${this.name} Price:${this.price} Stock:${this.stock}`);
    }
}
let ob=new Product(1,'Mouse',400,10);
ob.details();
let items=[
    new Product(1,'Mouse',400,10),
    new Product(2,'Keyboard',400,10),
    new Product(3,'Joystick',400,10),
    new Product(4,'Pendrive',400,10),
    new Product(5,'Speakers',400,10),
];
for(let product of items)
{
    product.details();
}