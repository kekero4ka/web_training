let iri = {name: 'Iri'};
let ba = {name: 'Ba'};
let vi = {name: 'Vi'};

let mySet = new Set();

mySet.add(iri);
mySet.add(ba);
mySet.add(vi);
mySet.add(iri);
mySet.add(vi);

mySet.forEach((v1, v2) => console.log(v2));
console.log("\nEntries:");
for (let entry of mySet) {
    console.log(entry);
}

console.log("\nKeys:");
for (let key of mySet.keys()) {
    console.log(key);
}

console.log("\nValues:");
for (let value of mySet.values()) {
    console.log(value);
}