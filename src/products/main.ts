import { products, addProduct } from "./product.service";

// Add a product using an object as parameter without the optional property
addProduct({
    title: 'P1',
    createdAt: new Date(2020, 1, 4),
    stock: 12,
})

// Add a product using and object as parameter with optional parameter
addProduct({
    title: 'P2',
    createdAt: new Date(),
    stock: 7,
    size: 'M'
})    

console.log(products);