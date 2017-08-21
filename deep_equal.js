function deepEqual1(prop, b) {
    return (prop in b);
}

function numOfProps(a){
    var propsInA = 0;
    for (var prop in a)
        propsInA += 1;
    return propsInA;
}

var obj1 = {here: {is: "an"}, object: 2};
var obj2 = {here: {is: "acn"}, object: 2};
var obj3 = obj2;

// console.log(deepEqual1("2", obj));

// console.log(numOfProps(obj));

function deepEqual(a, b) {
    if (a === b) return true;

    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object")
        return false;

    var propsInA = 0, propsInB = 0;

    for (var prop in a)
        propsInA += 1;

    for (var prop in b) {
        propsInB += 1;
        if (!(prop in a) || !deepEqual(a[prop], b[prop]))
            return false;
    }

    return propsInA == propsInB;
}

console.log(deepEqual(obj1, obj2))
console.log(deepEqual(obj2, obj3))
console.log(obj1["here"])

