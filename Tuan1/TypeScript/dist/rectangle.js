"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return (this.width + this.height) * 2;
    }
}
exports.Rectangle = Rectangle;
const rectangle = new Rectangle(15, 10);
console.log(`Width: ${rectangle.width} Height: ${rectangle.height} Area: ${rectangle.getArea()} Perimeter: ${rectangle.getPerimeter()}`);
