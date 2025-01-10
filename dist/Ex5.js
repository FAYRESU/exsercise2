"use strict";
class Customers {
    constructor(name) {
        this.member = false; // Default value
        this.memberType = ""; // Default value
        this.name = name;
    }
    getName() {
        return this.name;
    }
    isMember() {
        return this.member;
    }
    setMember(member) {
        this.member = member;
    }
    getMemberType() {
        return this.memberType;
    }
    setMemberType(type) {
        this.memberType = type;
    }
    toString() {
        return `Customer[name=${this.name}, member=${this.member}, memberType=${this.memberType}]`;
    }
}
class Visit {
    constructor(name, date) {
        this.serviceExpense = 0;
        this.productExpense = 0;
        this.customer = new Customers(name); // Correct instantiation
        this.date = date;
    }
    getName() {
        return this.customer.getName();
    }
    setMemberStatus(isMember) {
        this.customer.setMember(isMember); // Correct method call
    }
    getServiceExpense() {
        return this.serviceExpense;
    }
    setServiceExpense(ex) {
        this.serviceExpense = ex;
    }
    getProductExpense() {
        return this.productExpense;
    }
    setProductExpense(ex) {
        this.productExpense = ex;
    }
    getTotalExpense() {
        return this.serviceExpense + this.productExpense;
    }
    toString() {
        return `Visit[customer=${this.customer.toString()}, date=${this.date}, serviceExpense=${this.serviceExpense}, \nproductExpense=${this.productExpense}]`;
    }
}
class DiscountRate {
    static getServiceDiscountRate(type) {
        switch (type) {
            case "Premium":
                return this.serviceDiscountPremium;
            case "Gold":
                return this.serviceDiscountGold;
            case "Silver":
                return this.serviceDiscountSilver;
            default:
                return 0;
        }
    }
    static getProductDiscountRate(type) {
        switch (type) {
            case "Premium":
                return this.productDiscountPremium;
            case "Gold":
                return this.productDiscountGold;
            case "Silver":
                return this.productDiscountSilver;
            default:
                return 0;
        }
    }
}
DiscountRate.serviceDiscountPremium = 0.2;
DiscountRate.serviceDiscountGold = 0.15;
DiscountRate.serviceDiscountSilver = 0.1;
DiscountRate.productDiscountPremium = 0.1;
DiscountRate.productDiscountGold = 0.1;
DiscountRate.productDiscountSilver = 0.1;
module.exports = { DiscountRate, Customers, Visit };
