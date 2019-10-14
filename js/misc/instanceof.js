/**
 * obj instanceOf Class checks whether Class.prototype equals to one of prototypes in the obj prototype chain.

 In other words, compare one after another:

 obj.__proto__ === Class.prototype?
 obj.__proto__.__proto__ === Class.prototype?
 obj.__proto__.__proto__.__proto__ === Class.prototype?
 ...
 */
class Rabbit {}
let rabbit = new Rabbit();

// is it an object of Rabbit class?
console.log( rabbit instanceof Rabbit ); // rabbit.__proto__ === Rabbit.prototype => true

class Animal {}
class Rabbit2 extends Animal {}

let rabbit1 = new Rabbit2();
alert(rabbit1 instanceof Animal); // true

// rabbit.__proto__ === Rabbit.prototype
// rabbit.__proto__.__proto__ === Animal.prototype (match!)

/**
 There’s also a method objA.isPrototypeOf(objB), that returns true if objA is somewhere in the chain of prototypes for objB.
 So the test of obj instanceof Class can be rephrased as Class.prototype.isPrototypeOf(obj).
 That’s funny, but the Class constructor itself does not participate in the check! Only the chain of prototypes and Class.prototype matters.
 That can lead to interesting consequences when prototype property is changed after the object is created.
*/
 function Rabbit3() {}
 let rabbit3 = new Rabbit3();

 // changed the prototype
 Rabbit3.prototype = {};

 // ...not a rabbit any more!
 alert( rabbit3 instanceof Rabbit3 ); // false

/**
 -works-        -for-                                                          -returns-
 typeof	        primitives	                                                    string
 {}.toString	primitives, built-in objects, objects with Symbol.toStringTag	string
 instanceof	    objects	                                                        true/false
 */