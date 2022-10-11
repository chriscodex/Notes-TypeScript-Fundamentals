import {Product} from './products.model'

// Array created
export const products: Product[] = [];

// Add product function
export const addProduct = (data: Product
) => {
    products.push(data);
}

export const totalStock = ():number => {
    let total = 0;
    products.forEach((item)=>{
        total += item.stock
    });
    return total;
};