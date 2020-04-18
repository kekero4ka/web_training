interface NumberType {
    number: number;
}

class NumberClass implements NumberType {
    number = 4;

    constructor() {}
}

function identity<T>(arg: T): T {
    console.log('typeof arg: ', (arg instanceof NumberClass));
    console.log('arg: ', arg);

    return arg;
}

identity<NumberType>(new NumberClass());

// The second way is also perhaps the most common. Here we use type argument inference — that is,
// we want the compiler to set the value of T for us automatically based on the type of the argument we pass in:

let output = identity("myString"); // type of output will be 'string'
// Notice that we didn’t have to explicitly pass the type in the angle brackets (<>);
// the compiler just looked at the value "myString", and set T to its type.
