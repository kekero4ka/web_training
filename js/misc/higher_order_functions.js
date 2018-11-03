function fun(n){
    return function(m) {
        return m > n;
    }
}

// var greaterThan10 = fun(10);
console.log(fun(11)(12));