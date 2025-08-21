"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = void 0;
class Cat {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    sound() {
        console.log("Meow meow");
    }
}
exports.Cat = Cat;
const cat = new Cat('Tieu Meo');
console.log(`${cat.sound()}`);
