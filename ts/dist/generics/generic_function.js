"use strict";
class NumberClass {
    constructor() {
        this.number = 4;
    }
}
function identity(arg) {
    console.log('typeof arg: ', (arg instanceof NumberClass));
    console.log('arg: ', arg);
    return arg;
}
identity(new NumberClass());
// The second way is also perhaps the most common. Here we use type argument inference — that is,
// we want the compiler to set the value of T for us automatically based on the type of the argument we pass in:
let output = identity("myString"); // type of output will be 'string'
// Notice that we didn’t have to explicitly pass the type in the angle brackets (<>);
// the compiler just looked at the value "myString", and set T to its type.
