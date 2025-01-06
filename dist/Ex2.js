"use strict";
class Customer {
    constructor(ID, name, discount) {
        this.ID = ID;
        this.name = name;
        this.discount = discount;
    }
    getId() {
        return this.ID;
    }
    getName() {
        return this.name;
    }
    getDiscount() {
        return this.discount;
    }
    setDiscount(discount) {
        this.discount = discount;
    }
    toString() {
        return `Name(${this.ID})\ndiscount (${this.discount})`;
    }
}
class Invoice {
    constructor(ID, customer, amount) {
        this.ID = ID;
        this.customer = customer;
        this.amount = amount;
    }
    getId() {
        return this.ID;
    }
    getCustomer() {
        return this.customer;
    }
    setCustomer(customer) {
        this.customer = customer;
    }
    getAmount() {
        return this.amount;
    }
    setAmount(amount) {
        this.amount = amount;
    }
    toString() {
        return `Invoice ID: ${this.ID}\nCustomer: ${this.customer.getName()}\nAmount: ${this.amount}`;
    }
}
module.exports = { Customer, Invoice };
