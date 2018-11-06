// Array is an untyped, ordered, dynamic and indexed collection of values

let arr = [];
arr.push({name: 'iri'}, 'love', () => 4);

// .slice(start, end) -> end exclusive, doesn't modify the original array, returns a new subarray
let sliced = arr.slice(0, 2);
console.log('1) original array after being sliced: ', arr);
console.log('2) sliced array: ', sliced);

// .splice(start, (n of elems to delete) - opt, (what to insert) - opt), modifies original array
let arr2 = ['a', 'b', , 'c', 'd']; // allow gaps
let spliced = arr2.splice(1, 2, [7, 5, 3]); // start index inclusive, returns deleted elements
console.log('\n3) original array: ', arr2);
console.log('4) splice returned: ', spliced);

//Array.from()
function pow(array) {
    return Array.from(array, el => el * el);
}

console.log('\n5) Array.from(items, function()): ', pow([1, 2, 3, 4]));

const names = {qa: 'Iri', manager: 'Piotr', dev: 'Bob'};
console.log('\n6) Array.of(iterables): ', Array.of(Object.keys(names)));
console.log('7) Array.of(string): ', Array.of('coding'.split(''))); // split to an array of chars by '' - empty str

delete names.manager;
console.log('\n8) delete a val manager: ', names);

const fromConstructor = new Array(11, 'ob', new Date().toLocaleDateString());
console.log('\n9) array created using contructor: ', fromConstructor);

const fixedLength = new Array(2);
for (let i = 0; i < 3; i++) {
    fixedLength.push(i);
}
console.log('\n10) array with allegedly fixed length: ', fixedLength);

// Arrays are a specialized kind of object. JavaScript converts the numeric array index you specify to a string:
// the index 1 becomes the string "1" — then that string is used as a property name
const obArr = {};
obArr[1] = 'ob';
console.log('\n10) Array.isArray(obArr): ', Array.isArray(obArr));
console.log('    typeof obArr === "object"', typeof obArr === 'object');
