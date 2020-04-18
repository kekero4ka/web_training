interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick(): void;
}

function createClock(
    ctor: ClockConstructor,
    hour: number,
    minute: number
): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(private h: number, private m: number) {}
    tick() {
        console.log('Digital \nh: ', this.h, 'm: ', this.m);
    }
}
class AnalogClock implements ClockInterface {
    constructor(private h: number, private m: number) {}
    tick() {
        console.log('Analog \nh: ', this.h, 'm: ', this.m);
    }
}

let digital = createClock(DigitalClock, 12, 17);
digital.tick();
let analog = createClock(AnalogClock, 7, 32);
analog.tick();
