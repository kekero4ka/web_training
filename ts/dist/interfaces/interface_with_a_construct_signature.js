"use strict";
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
class DigitalClock {
    constructor(h, m) {
        this.h = h;
        this.m = m;
    }
    tick() {
        console.log('Digital \nh: ', this.h, 'm: ', this.m);
    }
}
class AnalogClock {
    constructor(h, m) {
        this.h = h;
        this.m = m;
    }
    tick() {
        console.log('Analog \nh: ', this.h, 'm: ', this.m);
    }
}
let digital = createClock(DigitalClock, 12, 17);
digital.tick();
let analog = createClock(AnalogClock, 7, 32);
analog.tick();
