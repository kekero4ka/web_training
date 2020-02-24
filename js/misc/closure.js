/**
 In JavaScript, every running function, code block {...}, and the script as a whole have an internal (hidden) associated
 object known as the Lexical Environment.

 The Lexical Environment object consists of two parts:
 1) Environment Record – an object that stores all local variables as its properties (and some other information like the
 value of this).
 2) A reference to the outer lexical environment, the one associated with the outer code.
 A “variable” is just a property of the special internal object, Environment Record. “To get or change a variable” means
 “to get or change a property of that object”.

 Unlike let variables, function declarations are fully initialized earlier, when a Lexical Environment is created.
 For top-level functions, it means the moment when the script is started.
 */

let phrase = 'Hoi';

function say(name) {
    console.log(phrase + ', ' + name);
}

say('John');

/**
 * So, during the function call we have two Lexical Environments: the inner one (for the function call) and the outer one (global):
 The inner Lexical Environment corresponds to the current execution of say(name).
 It has a single property: name, the function argument. We called say("John"), so the value of name is "John".
 The outer Lexical Environment is the global Lexical Environment.
 It has phrase variable and the function itself.
 The inner Lexical Environment has a reference to the outer one.
 When the code wants to access a variable – the inner Lexical Environment is searched first, then the outer one, then
 the more outer one and so on until the global one.
 If a variable is not found anywhere, that’s an error in strict mode (without use strict, an assignment to a non-existing
 variable, like user = "John" creates a new global variable user, that’s for backwards compatibility).
 */


/**
 * One call – one Lexical Environment
 Please note that a new function Lexical Environment is created each time a function runs.
 And if a function is called multiple times, then each invocation will have its own Lexical Environment,
 with local variables and parameters specific for that very run.

 Lexical Environment is a specification object
 “Lexical Environment” is a specification object: it only exists “theoretically” in the language specification to describe
 how things work. We can’t get this object in our code and manipulate it directly. JavaScript engines also may optimize it,
 discard variables that are unused to save memory and perform other internal tricks, as long as the visible behavior remains as described.

 All functions “on birth” receive a hidden property [[Environment]] with a reference to the Lexical Environment of their creation.
 Generally, a Lexical Environment object lives as long as there is a function which may use it. And only when there are none remaining, it is cleared.
 */
