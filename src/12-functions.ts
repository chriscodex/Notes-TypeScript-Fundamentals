(()=>{
    type Sizes = 'S' | 'M' | 'L' | 'XL';
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

    const product1 = createProductToJson('P1', new Date(),)
})();