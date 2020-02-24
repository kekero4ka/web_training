/**
 * A module is just a file. One script is one module.

 Modules can load each other and use special directives export and import to interchange functionality,
 call functions of one module from another one:
 - export keyword labels variables and functions that should be accessible from outside the current module.
 - import allows to import functionality from other modules.
 */

// module.exports = function sayHi(user) {
//     console.log(`Hello, ${user}!`);
// }

export function sayHi(user) {
    console.log(`Hello, ${user}!`);
}

/**
 * - Modules always use strict, by default. E.g. assigning to an undeclared variable will give an error.
 * - Each module has its own top-level scope. In other words, top-level variables and functions from a module
 * are not seen in other scripts. */
// -----------------------

/** Modules provide special export default (“the default export”) syntax to make the “one thing per module” way look better */
export default class User { // just add "default"
    constructor(name) {
        this.name = name;
    }
}

/** There may be only one export default per file.
 And then import it without curly braces: */


// main.js
import User from './user.js'; // not {User}, just User

new User('John');

/** Technically, we may have both default and named exports in a single module, but in practice people usually don’t mix
 * them. A module has either named exports or the default one.
 * As there may be at most one default export per file, the exported entity may have no name */
export default class { // no class name
    constructor() {
    }
}
export default function (user) { // no function name
    alert(`Hello, ${user}!`);
}
// export a single value, without making a variable
export default ['Jan', 'Feb', 'Mar', 'Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** auth/
 index.js
 user.js
 helpers.js
 tests/
 login.js
 providers/
 github.js
 facebook.js
 ...
 We’d like to expose the package functionality via a single entry point, the “main file” auth/index.js, to be used like
 this: import {login, logout} from 'auth/index.js'
 The idea is that outsiders, developers who use our package, should not meddle with its internal structure, search for
 files inside our package folder. We export only what’s necessary in auth/index.js and keep the rest hidden from prying eyes.*/



