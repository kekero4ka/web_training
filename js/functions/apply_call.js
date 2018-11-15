const person = {name: 'Iri', age: 29, title: 'FE dev', partner: 'Robert'};

function getBio() {
    console.log('This is ' + this.name + ', she is ' + this.age + ', she is a ' + this.title);
}

function getBio2(per) {
    console.log('This is ' + per.name + ', she is ' + per.age + ', she is a ' + per.title);
}

console.log('1) .call() accepts args as a list');
getBio.call(person);
getBio2.call(null, person);

console.log('\n2) .apply() accepts args as an array');
getBio.call(person);
getBio2.call(null, person);

console.log('\nMath.max.call(Math, 2, 6, 99): ', Math.max.call(Math, 2, 6, 99));
console.log('Math.max.apply(Math, [22, 36, 56]): ', Math.max.apply(Math, [22, 36, 56]));
