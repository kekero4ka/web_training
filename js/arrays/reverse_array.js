var arr = [1, 2, 3, 4];

function reverse1(arr){
    var arrRev = [];
    var arrLength = arr.length;
    for(var i = arrLength - 1; i >= 0; i--){
        var valueToPush = arr[i];
        arrRev.push(valueToPush);
    }
    return arrRev;
}

console.log(reverse1(arr));

function reverseInPlace(array) {
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        var old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

console.log(reverseInPlace(arr));