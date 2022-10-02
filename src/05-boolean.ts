(()=>{
    // Deducted by ts
    let isEnable = true;

    // Explicit form
    let isNew : boolean = true;
    console.log(isNew)

    // Example
    const random = Math.random();
    console.log(random);
    isNew = random > 0.3 ? true: false;
    console.log(isNew);

    // Dont do
    const myBoolC : Boolean = true;
})()