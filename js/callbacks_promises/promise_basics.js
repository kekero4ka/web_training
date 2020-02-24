/**
 The constructor syntax for a promise object is:

 let promise = new Promise(function(resolve, reject) {
  // executor (the producing code, "singer")
});

 The function passed to new Promise is called the executor. When new Promise is created, it runs automatically.
 It contains the producing code, that should eventually produce a result.

 Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only inside the executor.

 When the executor obtains the result, be it soon or late – doesn’t matter, it should call one of these callbacks:

 resolve(value) — if the job finished successfully, with result value.
 reject(error) — if an error occurred, error is the error object.
 So to summarize: the executor runs automatically, it should do a job and then call either resolve or reject.
 The executor receives two arguments: resolve and reject — these functions are pre-defined by the JavaScript engine.
 Also, resolve/reject expect only one argument (or none) and will ignore additional arguments.
 In case something goes wrong, the executor should call reject. That can be done with any type of argument (just like resolve).
 But it is recommended to use Error objects (or objects that inherit from Error)

 The promise object returned by new Promise constructor has internal properties:

 state — initially "pending", then changes to either "fulfilled" when resolve is called or "rejected" when reject is called.
 result — initially undefined, then changes to value when resolve(value) called or error when reject(error) is called.
 The properties state and result of the Promise object are internal.
 We can’t directly access them. We can use the methods .then/.catch/.finally for that.
 */

let promise1 = new Promise((resolve, reject) => {
    // the function is executed automatically when the promise is constructed

    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => resolve("done"), 1000);
});

let promise2 = new Promise((resolve, reject) => {
    // the function is executed automatically when the promise is constructed

    // after 1 second signal that the job is done with the result "done"
    setTimeout(() => reject(new Error('Whoops!')), 1000);
});

promise1.then(res => console.log(res));
promise2.then(res => console.log(res.message));

// success
let promise11 = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("done!"), 1000);
});

// resolve runs the first function in .then
promise11.then(
    result => console.log(result), // shows "done!" after 1 second
    error => console.log(error) // doesn't run
);

// error
let promise22 = new Promise(function(resolve, reject) {
    setTimeout(() => reject(new Error("Whoops!")), 1000);
});

// reject runs the second function in .then
promise22.then(
    result => console.log(result), // doesn't run
    error => console.log(error) // shows "Error: Whoops!" after 1 second
);