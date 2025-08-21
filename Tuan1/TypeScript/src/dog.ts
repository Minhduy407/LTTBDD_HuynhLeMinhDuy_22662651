import { Animal } from "./animal";

export class Dog implements Animal{
    constructor(public name: string){
        this.name = name
    }

    sound(): void {
        console.log("Gow gow");
    }
    
}

const dog = new Dog('Tieu Bach')
console.log(`${dog.sound()}`)