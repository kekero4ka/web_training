"use strict";
function getCounter() {
    let counter = function (start) {
        console.log('start: ', start);
    };
    counter.interval = 123;
    counter.reset = function () {
    };
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
