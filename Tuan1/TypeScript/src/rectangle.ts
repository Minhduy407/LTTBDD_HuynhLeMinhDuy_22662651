export class Rectangle{
    width: number
    height: number

    constructor(width: number,height: number){
        this.width = width;
        this.height = height;
    }

    getArea(): number{
        return this.width * this.height;
    }

    getPerimeter(): number{
        return (this.width + this.height) * 2;
    }
}

const rectangle = new Rectangle(15, 10);
console.log(`Width: ${rectangle.width} Height: ${rectangle.height} Area: ${rectangle.getArea()} Perimeter: ${rectangle.getPerimeter()}`)