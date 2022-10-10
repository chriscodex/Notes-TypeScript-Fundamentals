(()=>{
    type Sizes = 'S' | 'M' | 'L' | 'XL'
    type Product = {
        title: string,
        createdAt: Date,
        stock: number,
        size: Sizes
    }

    // Array created
    const products: any[] = [];

    const addProduct = (
        data: {
            title: string,
            createdAt: Date,
            stock: number,
            size?: Sizes
        }
    ) => {
        products.push(data)
    }

    // Add a product using an object as parameter without the optional property
    addProduct({
        title: 'P1',
        createdAt: new Date(),
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
})();