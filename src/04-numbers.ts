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

    // Error to show how typescript is very useful to detec possible mistakes
    let productInStock: number;
    console.log(productInStock);
    if (productInStock > 0) {
        console.log('In stock')
    } else {
        console.log('out of stock')
    }

    // Parse error
    let discount = parseInt('asd');
    console.log(discount)
    if (discount < 100) {
        console.log('apply')
    } else {
        console.log('not apply')
    }

    // Transform to decimal
    // They are numbers
    let hex = 0xfff;
    console.log(hex)
})()
