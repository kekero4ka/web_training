const ancestry = require('../json/ancestry');

let byName = {};

ancestry.forEach(person => byName[person.name] = person);

function average(array) {
    function plus(a, b) { return a + b; }

    return array.reduce(plus) / array.length;
}

function kidsBornAge(person) {
    return person.born - byName[person.mother].born;
}

let kidsBornAgeArr = average(ancestry.filter(per => (per.mother !== null && byName[per.mother] !== undefined))
    .map(per => kidsBornAge(per)));

let kidsBornAgeArr2 = ancestry.filter(per => (per.mother !== null && byName[per.mother] !== undefined)).map(per => kidsBornAge(per));

console.log(kidsBornAgeArr);
console.log(kidsBornAgeArr2);


