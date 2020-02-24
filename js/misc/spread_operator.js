/**
 It looks similar to rest parameters, also using ..., but does quite the opposite.
 When ...arr is used in the function call, it “expands” an iterable object arr into the list of arguments.
 */

let arr1 = [1, -2, 3, 4];
let arr2 = [8, 3, -8, 1];

// We also can even combine the spread operator with normal values:
console.log('...arr1: ', ...arr1); // 5 (spread turns array into a list of arguments)
console.log('Math.max(...arr1, ...arr2): ', Math.max(...arr1, ...arr2)); // 5 (spread turns array into a list of arguments)

// Also, the spread operator can be used to merge arrays:
let combined = [...arr1, ...arr2];
console.log('combined: ', combined);

// we use the spread operator to turn the string into array of characters:
let str = "Hello";

console.log([...str]);

// For this particular task we could also use Array.from, because it converts an iterable (like a string) into an array:
 let str2 = "Hello";

// Array.from converts an iterable into an array
console.log([...str2]);