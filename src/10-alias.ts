(()=>{
    // Alias type
    type UserID = string | number
    let userId : UserID

    function foo(userId: UserID) {
        if (typeof userId === 'string') {
            console.log(`string ${userId}`)
        }
    }

    foo('111')

    // Literal types
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    let shirtSize: Sizes;
    shirtSize = 'S';
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'XL';
    // It needs to be the same
    // Can't be like
    // shirtSize = 's
    
    function greeting (userId: UserID, size: Sizes) {
        if (typeof userId === 'string') {
            console.log(`string ${userId.toLowerCase()}`)
        }
    }
    
})()