// using literal
const ob1 = {name: 'Iri', age: 29, position: 'FE developer'};

// using keyword new
function Cat(name='Io') {
    this.name = name;
}

Cat.prototype.getName = function() {return this.name;}

const ob2 = new Cat('Meowy');
const noName = new Cat();
console.log('Cat name:' , ob2.getName());
console.log('Cat name:' , ob2['name']);
console.log('Default name cat:' , noName.name);

// using Object.create(proto, props);
const ob3 = Object.create(null); // no proto at all
const ob4 = Object.create({}); // Object.prototype
console.log('Proto of null based ob: ', Object.getPrototypeOf(ob3), '; ob3._proto_ is: ', ob3.__proto__);
console.log('Proto of {} based ob: ', Object.getPrototypeOf(ob4), '; ob4._proto_ is: ', ob4.__proto__);

// proto inheritance
function inherit(p) {
    if (p === null)
        throw new TypeError();

    const t  = typeof p;
    if(t !== 'object' && t !== 'function')
        throw new TypeError();

    function C(){}
    C.prototype = p;
    return new C();
}

// proto inheritance w.o classes and extending
function Kitty(name) {
    Cat.call(this, name);
}

Kitty.prototype = Cat.prototype;

const kid = new Kitty('Bob');
console.log(kid.getName());


