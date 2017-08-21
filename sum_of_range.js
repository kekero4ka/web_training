function range(start, end) {
    var arr = [];

    if (arguments[2] != undefined)
        var step = arguments[2];
    if (step > 0) {
        var step = arguments[2];
        for (var i = start; i <= end; i = i + step) {
            arr.push(i);
        }
    }
    else if (step < 0){
        var step = arguments[2];
        for (var i = start; i >= end; i = i + step) {
            arr.push(i);
        }
    }
    else {
        for (var i = start; i <= end; i++) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(range(10, 0, -2));

function sum(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

console.log(sum(range(10, 0, -2)));

