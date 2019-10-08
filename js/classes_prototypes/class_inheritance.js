/**
 - any expression is allowed after extends
 - makeSound() returns a class with the method voice defined
 - if no constructor is specified for a class, an empty one is created:
 constructor(...args) {
    super(..args);
 }

 Note: arrow functions do not have super. If accessed, it’s taken from the outer function.
 */

function makeSound() {
    return class {
        voice(sound) {
            console.log(sound);
        }
    }
}

class Animal extends makeSound() {
    constructor(name) {
        super();
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with the speed ${this.speed}km/h`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stopped, the speed is ${this.speed}km/h now`)
    }
}

/**
 - if no constructor is specified for a class, an empty one is created:
 constructor(...args) {
    super(..args);
 }

 - internally, extends keyword adds [[Prototype]] reference from Rabbit.prototype to Animal.prototype
 - In JavaScript, there’s a distinction between a “constructor function of an inheriting class” and all others.
 In an inheriting class, the corresponding constructor function is labeled with a special internal property [[ConstructorKind]]:"derived".

 The difference is:

 When a normal constructor runs, it creates an empty object and assigns it to this.
 But when a derived constructor runs, it doesn’t do this. It expects the parent constructor to do this job.
 So if we’re making a constructor of our own, then we must call super, because otherwise the object for this won’t be created. And we’ll get an error.
 */
class Cat extends Animal {
    constructor(name, bread) {
        super();
        this.speed = 0;
        this.name = name;
        this.bread = bread;
    }
    hide() {
        console.log(`${this.name} hides`);
    }

    stop() {
        super.stop();
        this.hide();
    }
}

const kitty = new Cat('Liz', 'British fold');
kitty.voice('meow');
kitty.run(5);
kitty.stop();

/**
JavaScript adds one more special internal property for functions: [[HomeObject]].
When a function is specified as a class or object method, its [[HomeObject]] property becomes that object.
Then super uses it to resolve the parent prototype and its methods.
 */

// Example:
 let rabbit = {
  name: "Rabbit",
  eat() {         // rabbit.eat.[[HomeObject]] == rabbit
    console.log(`${this.name} eats.`);
  }
};

 let longEar = {
  __proto__: rabbit,
  name: "Long Ear",
  eat() {         // longEar.eat.[[HomeObject]] == longEar
    super.eat();
  }
};

 // works correctly
 longEar.eat();  // Long Ear eats.

/**
 * [[HomeObject]] is defined for methods both in classes and in plain objects.
 * But for objects, methods must be specified exactly as method(), not as "method: function()".
 The difference may be non-essential for us, but it’s important for JavaScript.
 In the example below a non-method syntax is used for comparison. [[HomeObject]] property is not set and the inheritance doesn’t work:
 */

let animal = {
    eat: function() { // intentionally writing like this instead of eat() {...
        // ...
    }
};

let rabbit1 = {
    __proto__: animal,
    eat: function() {
        super.eat(); // => SyntaxError: 'super' keyword unexpected here
    }
};

rabbit1.eat();  // Error calling super (because there's no [[HomeObject]])

/**
 As we’ve known before, generally functions are “free”, not bound to objects in JavaScript.
 So they can be copied between objects and called with another this.
 The very existence of [[HomeObject]] violates that principle, because methods remember their objects.
 [[HomeObject]] can’t be changed, so this bond is forever.
 The only place in the language where [[HomeObject]] is used – is super.
 So, if a method does not use super, then we can still consider it free and copy between objects. But with super things may go wrong.
 */
