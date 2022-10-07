(()=>{
    type Sizes = 'S' | 'M' | 'L' | 'XL';

    // 1st Version
    function createProductToJson(
        title: string,
        createdAt: Date,
        stock: number,
        size: Sizes
    ) {
        return {
            title,
            createdAt,
            stock,
            size
        }
    }

    const product1 = createProductToJson('P1', new Date(), 12, 'S')
    console.log(product1)
    console.log(product1.title)

    // 2nd Version
    const createProductToJsonV2 = (
        title: string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    ) => {
        return {
            title,
            createdAt,
            stock,
            size
        }
    }
})();