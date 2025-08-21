"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
class Dog {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    sound() {
        console.log("Gow gow");
    }
}
exports.Dog = Dog;
const dog = new Dog('Tieu Bach');
console.log(`${dog.sound()}`);
