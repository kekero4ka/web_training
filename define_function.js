var square = function(r) {
    return r * r;
}

console.log(square(3));

//function can take more/fewer args that defined
function argCount() {
    console.log("Here is/are " + arguments.length + " args");
}

argCount(1, 2, 3);