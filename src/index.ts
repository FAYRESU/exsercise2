const {Author, Book}= require("./Ex1");

console.log("############# Ex1 ###############")
// author
const author1 = new Author("Natthakan Jamratphum", "664259005@webmail.npru.ac.th");
console.log(author1.toString());

const author2 = new Author("Udsanee Pakdeetrakulwong", "udsanee@webmail.npru.ac.th");
console.log(author2.toString());

const book1 = new Book("Basic Programming",[author1,author2],180,300)
console.log(book1.toString());
console.log(book1.getAuthorNames());

console.log("##############################");