import { Person } from "./person";

export class Student extends Person{
    grade: number

    constructor(name: string,age: number,grade: number) {
        super(name, age);
        this.grade = grade;
    }

    getInfo(): string {
        return `${super.getInfo()} Grade: ${this.grade}`; 
    }
}

const student = new Student('Nguyen Van A', 18,3);
console.log(student.getInfo());