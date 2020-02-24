/**
 Unlike Promise.all that rejects as a whole if any promise rejects. That’s good for “all or nothing” cases, when we need all results to go on.

 Promise.allSettled waits for all promises to settle. The resulting array has:
 {status:"fulfilled", value:result} for successful responses,
 {status:"rejected", reason:error} for errors.
 For example, we’d like to fetch the information about multiple users. Even if one request fails, we’re still interested in the others.
 */

let urls = [
    'https://api.github.com/users/iliakan',
    'https://api.github.com/users/remy',
    'https://no-such-url'
];

// Promise.allSettled(urls.map(url => fetch(url)))
//     .then(results => results.forEach((result, i) => {
//         if (result.status === 'fulfilled')
//             console.log(`result for ${urls[i]}: ` + result.value.status);
//         if (result.status === 'rejected')
//             console.log(`result for ${urls[i]}: ` + result.reason);
//     }));

/**
 * If the browser doesn’t support Promise.allSettled, it’s easy to polyfill
 * In this code, promises.map takes input values, turns them into promises (just in case a non-promise was passed) with p => Promise.resolve(p),
 * and then adds .then handler to every one.
 * That handler turns a successful result v into {state:'fulfilled', value:v}, and an error r into {state:'rejected', reason:r}.
 * That’s exactly the format of Promise.allSettled.
 */
// if (!Promise.allSettled) {
//     Promise.allSettled = function (promises) {
//         return Promise.all(promises.map(p => Promise.resolve(p).then(value => ({
//             state: 'fulfilled',
//             value
//         }), reason => ({
//             state: 'rejected',
//             reason
//         }))));
//     }
// }

/**
 Promise.race() is similar to Promise.all, but waits only for the first settled promise, and gets its result (or error)
 */
Promise.race([
    new Promise((resolve) => resolve(1)),
    new Promise(reject => reject(new Error('Oops!'))),
    new Promise(resolve => resolve(2))
]).then(console.log); // 1