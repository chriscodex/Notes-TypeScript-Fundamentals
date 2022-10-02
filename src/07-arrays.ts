(()=>{
    // Deducted by ts
    let arr = ['hello', 132]
    arr.push(111)
    // Can't be inserted
    // arr.push(true)

    // Explicit way
    let elements : (number | string | boolean | Object)[] = ['hello', 121]
    elements.push('hello friends');
    elements.push(false);
    elements.push(11);
    elements.push({});
    elements.push([]);

    // ts deducted array methods
})();