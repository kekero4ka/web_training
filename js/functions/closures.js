var scope = 'global';

function getScope() {
    const scope = 'local';

    function returnScope() {
        return scope;
    }

    return returnScope();
}

console.log('1) called from inside: ', getScope());

function getScope2() {
    const scope = 'local';

    function returnScope() {
        return scope;
    }

    return returnScope;
}

console.log('2) called from outside: ', getScope2()());

/* The fundamental rule of lexical scoping: JavaScript functions are executed
 using the scope chain that was in effect when they were defined.
 Each time a JavaScript function is invoked, a new object is created to hold the local variables
 for that invocation, and that object is added to the scope chain. When the function returns,
 that variable binding object is removed from the scope chain. */