(()=>{
    // Inflicted by ts
    let arr = ['hello', 132]
    arr.push(111)
    // Can't be inserted
    // arr.push(true)

    // Explicit way
    let elements : (number | string)[] = ['hello', 121]
})();