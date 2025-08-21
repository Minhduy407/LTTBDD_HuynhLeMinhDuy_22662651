export class User{
    private name: string

    constructor(name: string){
        this.name = name
    }

    getter(): string{
        return this.name
    }

    setter(name: string): void{
        this.name = name
    }
}