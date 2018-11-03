const names = 'Orange Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ';

const pattern = /\s*;\s*/;
const namesList = names.split(pattern);

const newPattern = /(\w+)\s(\w+)/;
let bySurnameList = new Array(namesList.length);

for (let i = 0, len = namesList.length; i < len; i++) {
    bySurnameList[i] = namesList[i].replace(newPattern, '$2, $1');
}
// console.log(bySurnameList.sort());

// [^] => any char not in the empty set of chars -  as a way to match any char,
// . (a dot) can't be used since it won't match new line chars
/* The repetition operators (+, *, ?, and {}) are greedy, meaning they match as much as they can and backtrack from
 there. If you put a question mark after them (+?, *?, ??, {}?), they become nongreedy and start by matching as little
 as possible, matching more only when the remaining pattern does not fit the smaller match */
function stripCommentsNonGreedy(code) {
    return code.replace(/\/\/.*|\/\*[^]*?\*\//g, '');
}

function stripCommentsGreedy(code) {
    return code.replace(/\/\/.*|\/\*[^]*\*\//g, '');
}
// console.log('Non greedy: ', stripCommentsNonGreedy( '1 /* a */+/* b */ 1'));
// console.log('Greedy: ', stripCommentsGreedy('1 /* a */+/* b */ 1'));

const name = 'dea+hl[]rd';
const text = "This dea+hl[]rd guy is super annoying.";
const escaped = name.replace(/[^\w\s]/g, "\\$&");
const regexp = new RegExp("\\b(" + escaped + ")\\b", "gi");
console.log(escaped);
console.log(text.replace(regexp, '_$1_'));

console.log("'It's their fathers'' he said, 'it's theirs.'".replace(/(^|\W)'/g, '$1"'));
// console.log(/(^|\W)'|'(\W|$)/g.exec("'I'm the cook,' he said, 'it's my job.'"));
console.log("'It's their fathers'' he said, 'it's theirs.'".match(/(^|\W)'/g));



