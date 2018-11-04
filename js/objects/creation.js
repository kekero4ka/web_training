// using literal
const ob1 = {name: 'Iri', age: 29, position: 'FE developer'};

// using keyword new
function Cat(name='Io') {
    this.name = name;
}

Cat.prototype.getName = function() { return this.name; };
Cat.prototype.setName = function(name) { this.name = name; };

const cat = new Cat('Meowy');

const noName = new Cat();
console.log('Cat name:' , cat.getName());
console.log('Cat name:' , cat['name']);
console.log('Default name cat:' , noName.name);

// using Object.create(proto, props);
const ob3 = Object.create(null); // no proto at all
const ob4 = Object.create({}); // Object.prototype
const ob5 = Object.create(ob4, {pro: {value: 7}}); // Object.prototype
console.log('Proto of null based ob: ', Object.getPrototypeOf(ob3), '; ob3._proto_ is: ', ob3.__proto__);
console.log('Proto of {} based ob: ', Object.getPrototypeOf(ob4), '; ob4._proto_ is: ', ob4.__proto__);
console.log('Proto of ob4-based ob5: ', Object.getPrototypeOf(ob5), '; ob5.pro: ', ob5.pro, '; get own props only: ', Object.getOwnPropertyNames(ob5));

// proto inheritance w.o classes and extending
function Kitty(name) {
    Cat.call(this, name);
}

Kitty.prototype = Cat.prototype;

const kid = new Kitty('Bob');
console.log('kitty name is: ', kid.getName());
console.log('Kitty\'s proto: ', Object.getPrototypeOf(kid));
console.log('Cat\'s proto: ', Object.getPrototypeOf(cat));
console.log('Cat\'s constructor proto: ', Object.getPrototypeOf(Cat.prototype));

//----- to prevent object modification in any way: Object.preventExtensions()/seal()/freeze()

// extensiveness of objects
console.log('is Cat extensible: ', Object.isExtensible(Cat.constructor));
Object.preventExtensions(kid);
kid.bread = 'Munchkin';
console.log('kid\'s bread: ', kid.bread); // because kid is unextensible, new props cannot be added

// Object.seal prevents object extension and configuration but existing props can be changed
Object.seal(cat);
delete cat.name;

console.log('is cat.name deleted for a sealed object? -> ', cat.getName());
cat.setName('Dave'); // modifying existing prop
console.log('get new cat.name -> ', cat.getName());

const kitty2 =  new Kitty('Dou');
// Object.freeze() prevents even existing props from being changed
Object.freeze(kitty2);
kitty2.setName('Neo');
console.log('is frozen kitty\'s name changed? -> ', kitty2.getName());
console.log('is kitty frozen? -> ', Object.isFrozen(kitty2));


