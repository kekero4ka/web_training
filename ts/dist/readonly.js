"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function WithDecorator(template, id) {
    return function (_) {
        const appl = document.getElementById(id);
        appl.innerHTML = template;
    };
}
let Test = class Test {
    constructor() {
        console.log('Creating person object');
    }
};
Test = __decorate([
    WithDecorator("<h1>I'm a header</h1>", 'app'),
    __metadata("design:paramtypes", [])
], Test);
const test = new Test();
console.log(test);
