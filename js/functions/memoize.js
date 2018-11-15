// return a memoized function
function memoize(f) {
    let cache = {};

    return function () {
        const key = arguments.length + Array.prototype.join.call(arguments, ",");
        console.log('cache: ', cache);

        if (key in cache) return cache[key];
        else return cache[key] = f.apply(this, arguments);
    }
}


// Euclidian algorithm
function getGreatestCommonDivisor(greater, smaller) {
    let tmp;

    if (greater < smaller) tmp = greater, greater = smaller, smaller = tmp;
    while (smaller !== 0) tmp = smaller, smaller = greater % smaller, greater = tmp;

    return greater;
}

const memoizedEuclidianAlgorithm = memoize(getGreatestCommonDivisor);

console.log(memoizedEuclidianAlgorithm(5, 150));

