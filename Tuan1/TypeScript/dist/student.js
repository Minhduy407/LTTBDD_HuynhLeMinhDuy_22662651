"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const person_1 = require("./person");
class Student extends person_1.Person {
    constructor(name, age, grade) {
        super(name, age);
        this.grade = grade;
    }
    getInfo() {
        return `${super.getInfo()} Grade: ${this.grade}`;
    }
}
exports.Student = Student;
const student = new Student('Nguyen Van A', 18, 3);
console.log(student.getInfo());
