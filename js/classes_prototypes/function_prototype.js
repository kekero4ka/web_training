/**
 Please note that F.prototype here means a regular property named "prototype" on F.
 It sounds something similar to the term “prototype”, but here we really mean a regular property with this name.
 */

let animal = {
    eats: true
};

function Rabbit(name) {
    this.name = name;
}

/**
 * Setting Rabbit.prototype = animal literally states the following: "When a new Rabbit is created, assign its [[Prototype]] to animal".
 */

Rabbit.prototype = animal;

/**
 * F.prototype property is only used when new F is called, it assigns [[Prototype]] of the new object.
 * After that, there’s no connection between F.prototype and the new object. Think of it as a “one-time gift”.
 */
let rabbit = new Rabbit("White Rabbit"); //  rabbit.__proto__ == animal

console.log('rabbit.eats', rabbit.eats);

/**
 * The default "prototype" is an object with the only property constructor that points back to the function itself
 */

function Rabby() {}
// by default:
// Rabbit.prototype = { constructor: Rabbit }

console.log('Rabby.prototype.constructor == Rabby: ', Rabby.prototype.constructor == Rabby);
/**
 * Naturally, if we do nothing, the constructor property is available to all rabbits through [[Prototype]]
 */

const rabby = new Rabby();
console.log('rabby.constructor === Rabby: ', rabby.constructor === Rabby);