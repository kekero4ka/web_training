let ob = {
    left: 1,
    right: 2
};

ob.middle = 3;
ob['last'] = 4;

console.log(ob.left);
console.log('ob keys: ', Object.keys(ob));
//-----------------------------

const ob1 = {};
Object.defineProperty(ob1, 'name', {
    enumerable: false,
    configurable: true,
    writable: false,
    value: 'Iri'});

ob1.time = new Date().toLocaleTimeString();

const ob2 = Object.create(ob1);
ob2.name = 'Bob'; // impossible to override parents read-only prop with the same name
console.log('ob2 name:', ob2.name);

// delete a prop (if configurable was false, it wouldn't be possible to delete it)
delete ob1.name;
console.log('name in ob1 after deletion: ', ob1.name);
console.log('name in ob2 after deletion in ob1: ', ob2.name); // since it was non-writable thus non-overritable

// checking own props
console.log('is prop "time" in ob1: ', 'time' in ob1);
console.log('is prop "year" in ob1: ', 'year' in ob1);
console.log('is prop "toString" in ob1: ', 'toString' in ob1);
console.log('is "toString" own prop of ob1: ',  ob1.hasOwnProperty('toString'));

// own props are enumerable, inherited - non-enumerable
ob2.date = new Date().toLocaleDateString();
console.log('is inherited time numerable: ', ob2.propertyIsEnumerable('time'));
console.log('is own date numerable: ', ob2.propertyIsEnumerable('date'));

// proper check on undefined
console.log('check if prop "age" is defined in ob2: ', ob2.age !== undefined);

// how to check the prop exists even if undefined
ob2.undef = undefined;
console.log('check whether undefined (not exists) with "!==": ', ob2.undef !== undefined);
console.log('check whether undefined (not exists) with "in": ', 'undef' in ob2); // it exists though set to undefined
