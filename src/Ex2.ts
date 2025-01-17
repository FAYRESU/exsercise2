class Customer {
    private ID: number;
    private name: string;
    private discount: number;

    constructor(ID: number, name: string, discount: number) {
        this.ID = ID;
        this.name = name;
        this.discount = discount;
    }

    public getId(): number {
        return this.ID;
    }

    public getName(): string {
        return this.name;
    }

    public getDiscount(): number {
        return this.discount;
    }

    public setDiscount(discount: number): void {
        this.discount = discount;
    }

    public toString(): string {
        return `ID: ${this.ID},${this.name}, discount: ${this.discount} %`;
    }
}

class Invoice {
    private ID: number;
    private customer: Customer;
    private amount: number;

    constructor(ID: number, customer: Customer, amount: number) {
        this.ID = ID;
        this.customer = customer;
        this.amount = amount;
    }

    public getId(): number {
        return this.ID;
    }

    public getCustomer(): Customer {
        return this.customer;
    }

    public setCustomer(customer: Customer): void {
        this.customer = customer;
    }

    public getAmount(): number {
        return this.amount;
    }

    public setAmount(amount: number): void {
        this.amount = amount;
    }

    public getCustomerId(): number {
        return this.customer.getId();
    }
public getCustomerName(): string {
        return this.customer.getName();
    }
public getCustomerDiscount(): number {
        return this.customer.getDiscount();
    }
public getAmountAfterDiscount(): number {
   const discount = this.amount * (this.getCustomerDiscount() / 100);
        return this.amount - discount;
    }
    public toString(): string {
        return `Invoice ID: ${this.ID} Customer: ${this.customer.getName()}\nAmount: ${this.amount}`;
    }
}

// Export the classes
export = { Customer, Invoice };
