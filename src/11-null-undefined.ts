(()=>{
    // Not possible
    //let myNumber: number = undefined;
    //let muString: string = null;

    // Ways to declare null and undefined
    let myNull : null = null;
    let myUndefined: undefined = undefined;

    // Cases to use
    let myNumber: number | null = null;
    myNumber = 111;

    let myString: string | undefined = undefined;
    myString = 'title'

    // Ts deduction
    function hi(name: string | null) {
        let hello = 'hola '
        if (name) {
            hello += name.toLowerCase()
            console.log(hello)
        } else {
            hello += 'nobody'
            console.log(hello)
        }
    }
    
    hi('Christian')
    hi(null)

    function hiV2(name: string | null) {

    }

})()