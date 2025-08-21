export class Product{
    name: string
    price: number

    constructor(name: string, price: number){
        this.name = name
        this.price = price
    }

}

const products: Product[] = [
    new Product('San pham 1', 100),
    new Product('San pham 2', 80),
    new Product('San pham 3', 10),
    new Product('San pham 4', 90),
    new Product('San pham 5', 50),
    new Product('San pham 6', 110),
    new Product('San pham 7', 105),
    new Product('San pham 8', 150),
    new Product('San pham 9', 210),
    new Product('San pham 10', 10),
    new Product('San pham 11', 610),
    new Product('San pham 12', 120),
    new Product('San pham 13', 99),
    new Product('San pham 14', 10),
    new Product('San pham 15', 80),
    new Product('San pham 16', 20),
    new Product('San pham 17', 30)
]

const expensiveProduct = products.filter(product => product.price > 100)

console.log('Products with price > 100')
expensiveProduct.forEach(product => {
    console.log(`Name: ${product.name} Price: ${product.price}`)
})