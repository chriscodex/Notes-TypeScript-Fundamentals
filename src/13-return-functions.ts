(() => {
    // In this function we define the data type which return the function
    const calcTotal = (prices: number[]):string => {
        let total = 0;
        prices.forEach((item)=>{
            total += item;
        });
        return total.toString();
    }

    const rta = calcTotal([1,2,3])
    console.log(rta);
})();