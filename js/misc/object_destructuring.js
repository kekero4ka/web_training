let options = {
    title: "Menu",
    width: 100,
    height: 200
};

// the order doesn't matter, the naming does
let {title, height, width} = options;

console.log(title);  // Menu
console.log(width);  // 100
console.log(height); // 200

// for missing props default value can be set
let {width: w = 40, height: h, title: t, radius = 5} = options;
console.log(w);  // Menu
console.log(h);  // 100
console.log(title);
console.log(radius);

// If we have a complex object with many properties, we can extract only what we need
let options3 = {
    title: "Menu3",
    width: 100,
    height: 200
};

// only extract title as a variable
let { title3 } = options3;

console.log(title);

// What if the object has more properties than we have variables?
// Can we take some and then assign the “rest” somewhere?
let options4 = {
    title: "Menu",
    height: 200,
    width: 100
};

// title = property named title
// rest = object with the rest of properties
let {title4, ...rest} = options4;

// now title="Menu", rest={height: 200, width: 100}
console.log(rest.height);  // 200
console.log(rest.width);

// Destructuring in functions.
// We can pass parameters as an object, and the function immediately destructurizes them into variables:
let options5 = {
    title: "My menu5",
    items: ["Item5", "Item5"]
};

// ...and it immediately expands it to variables
function showMenu({title = "Untitled5", width = 500, height = 50, items = []}) {
    // title, items – taken from options,
    // width, height – defaults used
    console.log( `${title} ${width} ${height}` ); // My Menu 200 100
    console.log( items ); // Item1, Item2
}

showMenu(options5);

// Please note that such destructuring assumes that showMenu() does have an argument.
// If we want all default values, then we should specify an empty object:
showMenu({});