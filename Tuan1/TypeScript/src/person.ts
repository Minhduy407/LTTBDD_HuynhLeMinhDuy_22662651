export class Person {
    name: string
    age: number

    constructor(name: string,age: number) {
        this.name = name;
        this.age = age;
    }

    getInfo(): string {
        return `Name: ${this.name} Age: ${this.age}`; 
    }
}

const person = new Person('Nguyen Van A', 18);
console.log(person.getInfo());