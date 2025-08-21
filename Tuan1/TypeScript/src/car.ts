export class Car{
    brand: string
    model: string
    year: number

    constructor(brand: string,model: string,year: number){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getInfo(): string{
        return `Brand: ${this.brand} Model: ${this.model} Year: ${this.year}`
    }
}

const car = new Car('Toyota', 'Oto', 2025);
console.log(car.getInfo())