class ExtendedArray extends Array {
    isEmpty() {
        return this.length === 0;
    }

    printout() {
        console.log(this);
    }
}

const ar = new ExtendedArray(1, 2, 3, 5, 8, 9);
console.log(ar.isEmpty());

const filtered = ar.filter(n => n >= 5);
console.log(filtered);

/**
 * Please note a very interesting thing. Built-in methods like filter, map and others – return new objects of exactly
 * the inherited type ExtendedArray. Their internal implementation uses the object’s constructor property for that.
 */
console.log('filtered.constructor === ExtendedArray: ', filtered.constructor === ExtendedArray);
console.log('filtered instanceof ExtendedArray: ', filtered instanceof ExtendedArray);
console.log(filtered instanceof Array);

filtered.printout();

/**
 * For example, both Array and Date inherit from Object, so their instances have methods from Object.prototype.
 * But Array.[[Prototype]] does not reference Object, so there’s no Array.keys() and Date.keys() static methods.
 There’s no link between Date and Object. They are independent, only Date.prototype inherits from Object.prototype.
 That’s an important difference of inheritance between built-in objects compared to what we get with extends.
 */