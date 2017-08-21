var arr = [];
arr.push(1, 2, 3);

var sliced = arr.slice(0, 2);
console.log(arr);

//Array.from()
function pow(array) {
    return Array.from(array, el => el * el);
}

console.log(pow[1, 2, 3, 4]);