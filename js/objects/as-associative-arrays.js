// objects are associative arrays - indexed by strings rather than by numbers
const stock = {'one': 1, 'two': 2, 'three': 3};
for (let share in stock) {
    console.log(stock[share]);
}

// querying non-existing props
if (stock) {
    // console.log(len = stock.company.length); // => TypeError, stock.company == undefined which doesn't have props
    // to avoid TypeError
    const len = stock && stock.company && stock.company.length;
    console.log('len is: ', len);
}




