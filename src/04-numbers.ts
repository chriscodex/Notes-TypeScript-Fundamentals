(() => {
    /* Reasignando valores */
    // Implicit form
    let productPrice = 80;
    productPrice = 100;
    console.log('productPrice: ', productPrice)

    //Explicit form
    let costumerAge:number = 100;
    costumerAge += 1;
    console.log(costumerAge)

 
    let productInStock: number;
    console.log(productInStock);
    if (productInStock > 0) {
        console.log('In stock')
    } else {
        console.log('out of stock')
    }
})()
