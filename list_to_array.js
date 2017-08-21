var list = { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }

function listToArray(list) {
    var array = [];
    for (var node = list; node; node = node.rest)
        array.push(node.value);
    return array;
}

console.log(listToArray(list));