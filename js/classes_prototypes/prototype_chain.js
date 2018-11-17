// if name isn't specified, it defaults to 'Io'
function Cat(name='Io') {
    this.name = name;
}

Cat.prototype.getName = function() {return this.name;}

function Kitty(name) {
    Cat.call(this, name);
}

Kitty.prototype = Cat.prototype;

const kid = new Kitty('Bob');
console.log('kid\'s name: ', kid.getName());
console.log('parent\'s name: ', new Cat('Iri').getName());
console.log('parent\'s def name: ', new Cat().getName());