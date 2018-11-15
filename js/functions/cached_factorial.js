// cache previously computed values as its props, treat itself as an array
function factorial(n) {
    if(n > 0 && isFinite(n) && n == Math.round(n)) {
        if (!factorial[n])
            factorial[n] = n * factorial(n - 1);
        return factorial[n];
    }
    else return NaN;
}

factorial[1] = 1;