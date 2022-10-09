(()=>{
    // Classic way
    const login = (email: string, password: number) => {
        console.log(email, password)
    };

    login('christ@christ.co', 1234);

    // Using objects
    const loginV2 = (data: {
        email: string, 
        password: number,
        // Optional
        phone?: string
    }) => {
        console.log(data.email, data.password);
    };

    loginV2({
        email: 'chris@christ.co',
        password: 1234
    })
})();