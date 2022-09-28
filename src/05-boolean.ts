(()=>{
    // Inflicted by ts
    let isEnable = true;

    // Explicit form
    let isNew : boolean = true;
    console.log(isNew)

    //
    const random = Math.random();
    console.log(random);
    isNew = random > 0.3;
    console.log(isNew);
})()