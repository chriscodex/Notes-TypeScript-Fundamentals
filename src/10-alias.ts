(()=>{
    // Alias type
    type UserID = string | number
    let userId : UserID

    function foo(userId: UserID) {
        if (typeof userId === 'string') {
            console.log(`string ${userId}`)
        }
    }
})()