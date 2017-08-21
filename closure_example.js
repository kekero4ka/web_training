function multiply(num) {
    return function(localNum) {
        return localNum * num;
    }
}

var res = multiply(2);
console.log(res(3));

//--> 6