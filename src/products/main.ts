import { products, createProduct, totalStock } from "./product.service";

// Add a product using an object as parameter without the optional property
createProduct({
    name: 'P1',
    createdAt: new Date(2020, 1, 4),
    stock: 12,
})

// Add a product using and object as parameter with optional parameter
createProduct({
    name: 'P2',
    createdAt: new Date(),
    stock: 7,
    size: 'M'
})    

console.log(products);
console.log(totalStock());