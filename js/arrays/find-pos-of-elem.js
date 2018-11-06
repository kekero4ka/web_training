function findPositionsOfElem(arr, el) {
    const length = arr.length;
    let pos = 0;
    let positions = [];

    while (pos < length) {
        pos = arr.indexOf(el, pos);
        if (pos === -1)
            break;
        positions.push(pos);
        pos++;
    }

    return positions;
}

console.log(findPositionsOfElem([1, 2, 3, 1], 1));