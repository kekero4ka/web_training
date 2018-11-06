let ar = ['a', 'b'];
ar[5] = 'f';
console.log('1) when ar index is greater than the last one: ', ar, 'ar[4]: ', ar[4]);
console.log('ar.length: ', ar.length);
// all the elems with greater indexes are deleted
console.log('2) set ar.length to 3: ', ar.length = 3, ' and ar now is: ', ar);
// delete doesn't affect array length
console.log('3) delete ar[1]: ', delete ar[1], ' and ar now is: ', ar, '; ar.length: ', ar.length);
// .pop() deletes and returns the last elem, unlike delete alters the length of the array
console.log('4) ar.pop(): ', ar.pop(), ' and ar now is: ', ar, '; ar.length: ', ar.length);
// .push() - add an elem to the end
ar.push('c');
console.log('5) ar now is: ', ar);
// adds an elem to the beginning
ar.unshift(1);
console.log('6) ar.unshift(1): ', ar);
// unlike delete alters the length of the array
ar.shift();
console.log('7) ar.length after .shift(): ', ar.length);
// array.join()
console.log('8) ar.join(-): ', [1, 2, 3, 4].join('-'));
// array.reverse()
console.log('9) ar.reverse(): ', [1, 2, 3].reverse());
// .sort()
console.log('10) .sort(): ', [7, , 2, undefined, 0, 'f'].sort());
// .concat()
console.log('11) concat(): ', [1, 2, 3].concat('a', 'b', 'c'));

// .filter()
console.log('12) .filter(): ', [1, 2, 3, 4, 5].filter(e => e % 2 === 0));

// .every() => is like the mathematical “for all” quantifier ∀: it returns true if
// and only if your predicate function returns true for all elements in the array
console.log('13) .every(): ', [1, 2, 3, 4].every(e => e % 2 === 0));

/* The some() method is like the mathematical “there exists” quantifier ∃: it returns
true if there exists at least one element in the array for which the predicate returns
true, and returns false if and only if the predicate returns false for all elements of
the array */
console.log('14) .some(): ', [1, 'o', 77, NaN].some(e => isNaN(e)));

// .find() - returns the value of the 1st elem that meets the conditions
const ppl = [{name: 'iri', title: 'fe dev'}, {name: 'bob', title: 'be dev'}, {name: 'Met', title: 'qa'}];
const isDev = p => p.title === 'fe dev';
console.log('15) .find(): ', ppl.find(isDev));

