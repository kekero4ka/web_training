let names = ['iliakan', 'remy', 'jeresig'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
    .then(responses => {
        // all responses are resolved successfully
        for (let response of responses) {
            console.log(`${response.url}: ${response.status}`); // shows 200 for every url
        }

        return responses;
    })
    // map array of responses into array of response.json() to read their content
    .then(responses => Promise.all(responses.map(res => res.json())))
    // all JSON answers are parsed: "users" is the array of them
    .then(users => users.forEach(user => console.log(user.name + ':' + user.location)));

/**
 If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error.
 */
Promise.all([
    new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))

]).catch(alert); // Error: Whoops!
/**
 Here the second promise rejects in two seconds. That leads to immediate rejection of Promise.all, so .catch executes:
 the rejection error becomes the outcome of the whole Promise.all.

 If one promise rejects, Promise.all immediately rejects, completely forgetting about the other ones in the list. Their results are ignored.
 For example, if there are multiple fetch calls, like in the example above, and one fails, other ones will still continue to execute,
 but Promise.all won’t watch them anymore. They will probably settle, but the result will be ignored.
 Promise.all does nothing to cancel them, as there’s no concept of “cancellation” in promises.
 */

/**
 Promise.all(iterable) allows non-promise “regular” values in iterable
 Normally, Promise.all(...) accepts an iterable (in most cases an array) of promises.
 But if any of those objects is not a promise, it’s passed to the resulting array “as is”.

 For instance, here the results are [1, 2, 3]:
 */
Promise.all([
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(1), 1000)
    }),
    2,
    3
]).then(alert); // 1, 2, 3