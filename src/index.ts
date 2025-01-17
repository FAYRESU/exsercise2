const {Author, Book}= require("./Ex1");
const { Customer, Invoice } = require("./Ex2");
const { Person, Student, Staff } = require("./Ex3");
const {Shape,Square,Rectangle,Circle} = require("./Ex4");
const {DiscountRate, Customers, Visit} = require("./Ex5");

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
console.log("############# Ex2 ###############")
// author
const customer1 = new Customer(1, "BL", 10);
console.log(customer1.toString());

const customer2 = new Customer(2, "Nubnoey", 15);
console.log(customer2.toString());

const invoice1 = new Invoice(101, customer1, 500);
console.log(invoice1.toString());
console.log(invoice1.getAmountAfterDiscount());

const invoice2 = new Invoice(102, customer2, 1000);
console.log(invoice2.toString());
console.log(invoice2.getAmountAfterDiscount());
console.log("##############################");

console.log("############# Ex3 ###############")
const student1 = new Student("Natthakan","Loei","SE",66,"11400");
console.log(student1.toString());

const staff1 = new Staff("Natthakan","Loei","NPRU",11400);
console.log(staff1.toString());

console.log("############# Ex4 ###############")
const cicle = new Circle("red",true,9)
console.log(cicle.toString())

const rectangle = new Rectangle("red",true,5,10)
console.log(rectangle.toString())

const shape = new Shape("red",true)
console.log(shape.toString())

const square = new Square("red",true,5)
console.log(square.toString())
square.setSide();
console.log("##############################");
console.log("############# Ex5 ###############");
const customer = new Customers("Fale");
    customer.setMember(true);
    customer.setMemberType("Premium");
    console.log(customer.toString());
    
    const visit = new Visit(customer.getName(), new Date());
    visit.setServiceExpense(100);
    visit.setProductExpense(50);
    console.log(visit.toString());
    
    const serviceDiscount = DiscountRate.getServiceDiscountRate(customer.getMemberType());
    const productDiscount = DiscountRate.getProductDiscountRate(customer.getMemberType());
    const totalExpense = 
      visit.getServiceExpense() * (1 - serviceDiscount) +
      visit.getProductExpense() * (1 - productDiscount);
    
    console.log(`Total expense after discounts: ${totalExpense}`);
