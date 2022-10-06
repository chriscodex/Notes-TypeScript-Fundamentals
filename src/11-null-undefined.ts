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
        if (name) {
            
        }
    }
})()