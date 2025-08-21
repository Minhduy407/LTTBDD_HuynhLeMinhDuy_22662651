"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getInfo() {
        return `Name: ${this.name} Age: ${this.age}`;
    }
}
exports.Person = Person;
const person = new Person('Nguyen Van A', 18);
console.log(person.getInfo());
