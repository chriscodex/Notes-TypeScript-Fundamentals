(()=>{
    // Classic way
    const login = (email: string, password: number) => {
        console.log(email, password)
    };

    login('christ@christ.co', 1234);

    // Using objects
    const loginV2 = (data: {
        email: string, 
        password: number,
        // Optional
        phone?: string
    }) => {
        console.log(data.email, data.password);
    };

    loginV2({
        email: 'chris@christ.co',
        password: 1234
    })

    // Example
    type Sizes = 'S' | 'M' | 'L' | 'XL'

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