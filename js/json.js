const ancestry = require('ancestry.json');
// This makes sure the data is exported in node.js —
// `require(./path/to/ancestry.json.js)` will get you the array.
if (typeof module != "undefined" && module.exports)
    module.exports = ANCESTRY_FILE;

var ancestry = JSON.stringify(ancestry);
var size = JSON.parse(ancestry).length;

console.log(size);

//filter function
function filterCondition(person) {
    return person.born > 1900 && person.born < 1925;
}

console.log(ancestry.filter(filterCondition));

//map function
function filterCondition(person) {
    return person.died - person.born >= 90;
}

function transformFunc(person){
    return person.name;
}

var overNinety = ancestry.filter(filterCondition);

// console.log(overNinety);
overNinety.forEach(console.log);
console.log(overNinety.map(transformFunc));