function WithDecorator(template: string, id: string) {
    return function (_: Function) {
        const appl = document.getElementById(id)!;
        appl.innerHTML = template;
    }
}

@WithDecorator("<h1>I'm a header</h1>", 'app')
class Test {
    constructor() {
        console.log('Creating person object');
    }
}

const test = new Test();
console.log(test);