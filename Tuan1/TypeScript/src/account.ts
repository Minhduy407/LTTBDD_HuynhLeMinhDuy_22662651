export class Account{
    public username: string
    private password: string
    public readonly accountID: number

    constructor(username: string, password: string, accountID: number){
        this.username = username
        this.password = password
        this.accountID = accountID
    }
}