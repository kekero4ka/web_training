/**
 * @param src
 * @param callback
 * Once again, the recipe that we used for loadScript is actually quite common. It’s called the “error-first callback” style.

 The convention is:
 The first argument of the callback is reserved for an error if it occurs. Then callback(err) is called.
 The second argument (and the next ones if needed) are for the successful result. Then callback(null, result1, result2…) is called.
 So the single callback function is used both for reporting errors and passing back results.
 */

function loadScript(src, callback) {
    let script = document.createElement('script');
    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = () => new Error(`Error while loading the script ${script.name}`);

    document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', (error, script) => {
    if (error) {
        throw new Error(error.message);
    } else {
        alert(`Cool, the ${script.src} is loaded`);
    }
});

/**
 * As calls become more nested, the code becomes deeper and increasingly more difficult to manage, especially if we have
 * a real code instead of ..., that may include more loops, conditional statements and so on.

 That’s sometimes called “callback hell” or “pyramid of doom.”
 */