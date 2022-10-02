(()=>{
    // Deducted by ts
    let productTitle = 'this is my product';
    /* Not possible */
    // productTitle = null;
    // productTitle = ()=>{};
    // productTitle = 123

    // single cuote
    var productDescription: string
    productDescription = 'product changed';
    console.log(productDescription)

    // double cuote
    // mostly used if i use '
    productTitle = "It's my product";
    console.log(productTitle)

    // Concat lines
    let price: number = 100
    const summary = `
        title: ${productTitle}
        description: ${productDescription}
        price: ${price}
    `
    console.log(summary)

    // Dont do it
    // Capital Lletter
    let str : String = 'foo'
})()