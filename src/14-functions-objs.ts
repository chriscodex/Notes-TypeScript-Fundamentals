(()=>{
    // Classic way
    const login = (email: string, password: number) => {
        console.log(email, password)
    };

    login('christ@christ', 1234);

    // Using objects
    const loginV2 = (data: {email: string, password: number}) =>{
        console.log(data.email, data.password);
    };
});