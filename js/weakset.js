let iri = {name: 'Iri'};
let ba = {name: 'Ba'};
let vi = {name: 'Vi'};

let mySet = new WeakSet();

mySet.add(iri);
mySet.add(ba);
mySet.add(vi);
mySet.add(iri);
mySet.add(vi);

//add, has, delete
console.log(mySet.delete(vi));
console.log(mySet.has(vi));
console.log(mySet.add(vi));
console.log(mySet.has(vi));

//true
//false
//{}
//true