"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    deposit(amount) {
        if (amount <= 0) {
            throw new Error('Deposit amount must be greater than 0.');
        }
        this.balance += amount;
        console.log(`Deposited amount ${amount}. New balance is ${this.balance}`);
    }
    withdraw(amount) {
        if (this.balance <= 0) {
            throw new Error('Withdraw balance must be greater than 0.');
        }
        this.balance -= amount;
        console.log(`Withdraw amount ${amount}. New balance is ${this.balance}`);
    }
}
exports.BankAccount = BankAccount;
const bankAccount = new BankAccount(0);
bankAccount.deposit(500);
bankAccount.withdraw(50);
