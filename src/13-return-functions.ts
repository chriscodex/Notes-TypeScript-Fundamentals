(() => {
    const calcTotal = (prices: number[]) => {
        let total = 0;
        prices.forEach((item)=>{
            total += item;
        });
        return total;
    }
})();