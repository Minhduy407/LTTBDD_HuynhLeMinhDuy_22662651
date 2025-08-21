import { Animal } from "./animal";

export class Cat implements Animal{
    constructor(public name: string){
        this.name = name
    }

    sound(): void {
        console.log("Meow meow");
    }
    
}

const cat = new Cat('Tieu Meo')
console.log(`${cat.sound()}`)