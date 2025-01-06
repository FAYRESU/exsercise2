"use strict";
class Author {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return "Email:" + this.email;
    }
    setEmail(email) {
        this.email = email; //attribute , parameter ใน class นั้นๆ
    }
    toString() {
        return "Author[name=" + this.name + "\nEmail:" + this.email + "]";
    }
}
class Book {
    constructor(name, authors, price, qty = 0) {
        this.qty = 0;
        this.name = name;
        this.authors = authors;
        this.price = price;
        this.qty = this.qty;
    }
    getName() {
        return this.name;
    }
    getAuthors() {
        return this.authors;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price = price;
    }
    getQty() {
        return this.qty;
    }
    setQty(qty) {
        this.qty = qty;
    }
    toString() {
        let details = "Book[name=\"" + this.name + "\"authors={";
        for (let i = 0; i < this.authors.length; i++) {
            details += this.authors[i].toString() + ",";
        }
        details += "}, price=" + this.price + ", qty" + this.qty;
        return details;
    }
    getAuthorNames() {
        let authorsNames = "";
        for (let i = 0; i < this.authors.length; i++) {
            authorsNames += this.authors[i].getName() + ",";
        }
        return authorsNames;
    }
}
module.exports = { Author, Book };
