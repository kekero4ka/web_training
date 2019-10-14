// const [a, b] = 'Imi Miro'.split(' ');
// const [a, b] = Object.keys({1: 'a', 2: 'b'});
// const [a, , c] = Object.keys({1: 'a', 2: 'b', 3: 'c'});
const [a, , c] = ['o', 'oo', 'ooo'];

// any iterables can be used, not only arrays
const [a1, a2, a3] = new Set([1, 2, 3]);

// console.log(a);
// console.log(b);
// console.log(c);
// console.log('a1: ', a1, ' a2: ', a2, ' a3: ', a3);

let user = {
    name: "John",
    age: 30
};

// loop over keys-and-values
for (let [key, value] of Object.entries(user)) {
    // console.log(`${key}: ${value}`); // name:John, then age:30
}

// and the same for a map:
let user2 = new Map();
user2.set("name", "John");
user2.set("age", "30");

for (let [key, value] of user2) {
    // console.log(`${key}: ${value}`); // name:John, then age:30
}

// -------
let [name1, name2, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log('name1: ', name1); // Julius
console.log('name2: ', name2); // Caesar

// Note that type of `rest` is Array.
console.log('rest[0]: ', rest[0]); // Consul
console.log('rest[1]: ', rest[1]); // of the Roman Republic
console.log('rest.length: ', rest.length);

// rest parameter can be called in any way but it should have 3 dots before it and go last in the destructuring assignment
let [...all] = ['Imi', 'Bob', 'John'];
console.log('all[0]:', all[0]);
console.log('all[1]:', all[1]);