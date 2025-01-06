"use strict";
const { Author, Book } = require("./Ex1");
console.log("############# Ex1 ###############");
// author
const author1 = new Author("Natthakan Jamratphum", "664259005@webmail.npru.ac.th");
console.log(author1.toString());
const author2 = new Author("Udsanee Pakdeetrakulwong", "udsanee@webmail.npru.ac.th");
console.log(author2.toString());
const book1 = new Book("Basic Programming", [author1, author2], 180, 300);
console.log(book1.toString());
console.log(book1.getAuthorNames());
console.log("##############################");
const { Customer, Invoice } = require("./Ex2");
console.log("############# Ex2 ###############");
// author
const customer1 = new Customer(1, "BL", 10);
console.log(customer1.toString());
const customer2 = new Customer(2, "Nubnoey", 15);
console.log(customer2.toString());
const invoice1 = new Invoice(101, customer1, 500);
console.log(invoice1.toString());
const invoice2 = new Invoice(102, customer2, 1000);
console.log(invoice2.toString());
console.log("##############################");
