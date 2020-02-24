function InputError(message) {
    this.message = message;
    this.stack = (new Error()).stack;
}

InputError.prototype = Object.create(Error.prototype);
InputError.prototype.name = 'InputError';

class ValidationError extends Error {
    constructor(msg) {
        super();
        this.message = msg;
        this.name = this.constructor.name;
    }
}

function test() {
    throw new ValidationError('Whoops');
}

try {
    test();
} catch (err) {
    console.log(err.message);
    console.log(err.name);
    console.log(err.stack);
}