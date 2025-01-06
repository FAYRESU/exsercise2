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
        return `ID: ${this.ID},${this.name}, discount: ${this.discount} %`;
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
    getCustomerId() {
        return this.customer.getId();
    }
    getCustomerName() {
        return this.customer.getName();
    }
    getCustomerDiscount() {
        return this.customer.getDiscount();
    }
    getAmountAfterDiscount() {
        const discount = this.amount * (this.getCustomerDiscount() / 100);
        return this.amount - discount;
    }
    toString() {
        return `Invoice ID: ${this.ID} Customer: ${this.customer.getName()}\nAmount: ${this.amount}`;
    }
}
module.exports = { Customer, Invoice };
