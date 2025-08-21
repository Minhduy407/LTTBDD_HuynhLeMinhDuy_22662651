export class BankAccount{
    balance: number

    constructor(balance: number){
        this.balance = balance;
    }

    deposit(amount: number): void{
        if(amount <= 0){
            throw new Error('Deposit amount must be greater than 0.')
        }
        this.balance += amount;
        console.log(`Deposited amount ${amount}. New balance is ${this.balance}`);
    } 

    withdraw(amount: number): void{
        if(this.balance <= 0){
            throw new Error('Withdraw balance must be greater than 0.')
        }
        this.balance -= amount;
        console.log(`Withdraw amount ${amount}. New balance is ${this.balance}`);
    }
}

const bankAccount = new BankAccount(0)
bankAccount.deposit(500)
bankAccount.withdraw(50)