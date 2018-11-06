const iri = {name: 'Iri', age: 29, today: new Date().toDateString()};
console.log('1) original iri: ', iri);

// JSON.stringify() looks for a toJSON() method on any object it is asked to serialize
const json = JSON.stringify(iri);
console.log('\n2) stringified iri, json: ', json);

const deeply_copied_person = JSON.parse(json);

console.log('\n3) deeply_copied and parsed from json iri: ', deeply_copied_person);
console.log('\n4) to json null: ', JSON.stringify(null), ', undefined: ', JSON.stringify(undefined),
                 ', NaN: ', JSON.stringify(NaN), ', Infinity: ', JSON.stringify(Infinity),
                 ', RegExp: ', JSON.stringify(/\s/), ', function: ', JSON.stringify(() => 1));