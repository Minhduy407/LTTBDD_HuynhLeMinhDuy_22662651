"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getInfo() {
        return `Brand: ${this.brand} Model: ${this.model} Year: ${this.year}`;
    }
}
exports.Car = Car;
const car = new Car('Toyota', 'Oto', 2025);
console.log(car.getInfo());
