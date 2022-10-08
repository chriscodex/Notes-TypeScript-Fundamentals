(() => {
    // In this function we define the data type which return the function
    const calcTotal = (prices: number[]):string => {
        let total = 0;
        prices.forEach((item)=>{
            total += item;
        });
        return total.toString();
    }

    // Void
    // Function that doesn't return anythin
    const printTotal = () =>{
        let rta = calcTotal([1,2,3])
        console.log(rta)
    };

    printTotal();
})();