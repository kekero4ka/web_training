// console.log(/\d{5}/.test(12345)); // /pattern/ goes in between the slashes
// console.log(/\D/.test('abde'));// test() is one of the main methods

// \d any digit character
// \D any NON-digit  char
// \s any space char like newline, tab
// {2,4} => indicates the num of times smth is expected to occur

// console.log('date matching: ', /\d{1,2}-\d{1,2}-\d{2,4}\s\d{2}:\d{2}/.test('09-10-18 22:42'));
// console.log('at least 5 or more times: ', /\d{5,}/.test(12345));

// /[^01]/ to invert a set of chars, everything except binary
console.log('/[^01]/: ', /[^01]/.test(100011100));
console.log('/[^01]/: ', /[^01]/.test(1110001012));

// /d+ => matching more than 1 digit, d* => matching 0 or more digits
// console.log('\d+', /\d+/.test(12345));
// console.log('\d*', /\d*/.test(''));

// /labou?r => ? indicates a symbol may occur 0 or 1 time
// console.log('? sign: ',/labou?r/.test('labour'));
// console.log('? sign: ',/labou?r/.test('labor'));

// a part of regex enclosed in parenthesis is like a single element
// i an the end of regex makes it case-insensitive

console.log('case insensitivity: ', /boo+(hoo+)+/i.test('BooohoooBoooHooo'));

function findDateInString(str) {
    const regExp = /\d{1,2}-\d{1,2}-\d{4}/;
    const matches = regExp.exec(str);
    console.log(matches);
}

findDateInString('30-1-2013');

// ^ matches the start of the expression and $ the end
// \b matches the start of the string and \w the end
console.log(/\bcon/.test('concatenation'));
console.log(/\wion/.test('concatenation'));

// | stands for matcher alternatives
// console.log('| symbol: ', /\da|[1-9]c/.test('7c'));

// . => a dot stands for anything
// console.log('. fot anything', /^.*x/.exec( 'abcxe'));

// .replace() method accepts regexes and functions, /g stands for global search
// console.log('the cia and fbi'.replace(/(cia|fbi)/g, str => str.toUpperCase()));

// swapping: $2 $1 => $2 gets replaced by the 2nd match group, $1 - by te 1st
// console.log('Mironenko, Irina\nHopman, Bob '.replace(/([\w]+), ([\w]+)/g, '$2 $1'));
// console.log('Mironenko, Irina\nHopman, Bob '.match(/([\w]+), ([\w]+)/g));

const stock = '1 lemon, 2 eggs, 15 apples';

function minusOne(match , amount, unit) {
    amount = Number(amount) - 1;
    if (amount === 0) {
        amount = 'no';
    } else if (amount === 1) {
        unit = unit.slice(0, unit.length - 1);
    }
    return amount + ' ' + unit;
}
// () => used to remember the found match
// (?:) => not to remember the found match
console.log(stock.replace(/(\d+) (\w+)/g, minusOne));

function propertyToLowerAndHyper(prop) {
    function toLowerCase(match, offset) {
        return (offset > 0? '-' : '') + match.toLowerCase();
    }
    return prop.replace(/[A-Z]/g, toLowerCase);
}

console.log(propertyToLowerAndHyper('borderTop'));

