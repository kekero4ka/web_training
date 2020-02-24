/**
 * In JavaScript we can only inherit from a single object. There can be only one [[Prototype]] for an object.
 * But sometimes that feels limiting. For instance, we have a class StreetSweeper and a class Bicycle, and want to make their mix: a StreetSweepingBicycle.
 * Or we have a class User and a class EventEmitter that implements event generation, and we’d like to add the
 * functionality of EventEmitter to User, so that our users can emit events.
 * There’s a concept that can help here, called “mixins”.
 *
 * A mixin is a class containing methods that can be used by other classes without a need to inherit from it.
 * In other words, a mixin provides methods that implement a certain behavior,
 * but we do not use it alone, we use it to add the behavior to other classes.
 *
 * The simplest way to implement a mixin in JavaScript is to make an object with useful methods,
 * so that we can easily merge them into a prototype of any class.
 * For instance here the mixin sayHiMixin is used to add some “speech” for User
 */

let sayMixin = {
    say(phrase) {
        alert(phrase);
    }
};

let sayHiMixin = {
    __proto__: sayMixin, // (or we could use Object.create to set the prototype here)

    sayHi() {
        // call parent method
        super.say(`Hello ${this.name}`); // (*)
    },
    sayBye() {
        super.say(`Bye ${this.name}`); // (*)
    }
};

class User {
    constructor(name) {
        this.name = name;
    }
}

// copy the methods
Object.assign(User.prototype, sayHiMixin);

// now User can say hi
new User("Dude").sayHi(); // Hello Dude!

/**
 methods sayHi and sayBye were initially created in sayHiMixin. So even though they got copied,
 their [[HomeObject]] internal property references sayHiMixin. As super looks for parent methods in [[HomeObject]].[[Prototype]],
 that means it searches sayHiMixin.[[Prototype]], not User.[[Prototype]].
 */

