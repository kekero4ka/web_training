let map = {};

map.dance = true;
map.jump = false;

Object.prototype.nonsense = 'smth';

for (let prop in map) {
    console.log(prop); // dance jump nonsense
}

console.log('\nHas own property:');
for (let prop in map) {
    if (map.hasOwnProperty(prop))
    console.log(prop); // dance jump
}

console.log('\nDefault props in custom objects:');
// on top of that, it didn't show up during iteration since js distinguishes between enumerable/nonenumerable props
// all default Object.prototype props are nonenumerable
console.log('toString' in map);

console.log('\nAdd nonenumerable props:');
// define own nonenumerable prop
Object.defineProperty(Object.prototype, 'nonsense', {enumerable: false, value: 'invisible'});
for (let prop in map) {
    console.log(prop); // dance jump
}

console.log(map.nonsense);

console.log('\nCreate protoless object:');
// create a prototype-less object
let protoLessMap = Object.create(null);
console.log('toString' in protoLessMap);