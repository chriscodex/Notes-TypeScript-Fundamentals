(()=>{
    /* Union Types*/
    let myDinamicVar : number | string;
    myDinamicVar = 121;
    myDinamicVar = 'hello';

    // deduction of data type
    function greeting(myText : number | string) {
        if (typeof myText === 'string') {
            console.log(myText.toLowerCase())
        } else {
            console.log(myText.toFixed(1))
        }
    }

    greeting('hello');
    greeting(12.32323);
})();