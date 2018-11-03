let iri = {name: 'Iri'};
let ba = {name: 'Ba'};
let vi = {name: 'Vi'};

let mySet = new WeakMap();

mySet.set(iri, 28);
mySet.set(ba, 27);
mySet.set(vi, 27);

//set, get, has, delete
mySet.set(iri, 28);
mySet.set(ba, 27);
mySet.set(vi, 27);

console.log(mySet.get(vi));
console.log(mySet.delete(vi));
console.log(mySet.has(vi));