let map = new Map();

let iri = {name: 'Iri'};
let ba = {name: 'Ba'};

map.set(iri, 28)
    .set(ba, 27);

for (let entry of map) {
    console.log(entry);
}

for (let key of map.keys()) {
    console.log(key);
}

for (let value of map.values()) {
    console.log(value);
}

map.forEach((v, k) => console.log(v, k));