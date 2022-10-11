import {Product} from './products.model'

// Array created
const products: Product[] = [];

// Add product function
export const addProduct = (data: Product
) => {
    products.push(data)
}