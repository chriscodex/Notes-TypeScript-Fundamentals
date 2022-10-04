(()=>{
    let myDinamicVar : any
    myDinamicVar = 'hello';
    myDinamicVar = 123;
    myDinamicVar = false;
    
    // Casting any
    myDinamicVar = 'Hola';
    const rta = (myDinamicVar as string).toLowerCase();
})()