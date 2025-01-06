abstract class Person {
    private name: string;
    private address: string;

    constructor(name: string, address: string) {
        this.name = name;
        this.address = address;
    }

    public getName(): string {
        return this.name;
    }

    public getAddress(): string {
        return this.address;
    }

    public setAddress(address: string): void {
        this.address = address;
    }

    public toString(): string {
        return "Person[Name = " + this.name + " Address = " + this.address + "]";
    }
}

class Student extends Person {
    private program: string;
    private year: number;
    private fee: string;

    constructor(name: string, address: string, program: string, year: number, fee: string) {
        super(name, address);
        this.program = program;
        this.year = year;
        this.fee = fee;
    }

    public getProgram(): string {
        return this.program;
    }

    public setProgram(program: string): void {
        this.program = program;
    }

    public getYear(): number {
        return this.year;
    }

    public setYear(year: number): void {
        this.year = year;
    }

    public getFee(): string {
        return this.fee;
    }

    public setFee(fee: string): void {
        this.fee = fee;
    }

    public toString(): string {
        return "Student[" + super.toString() + ", Program = " + this.program + ", Year = " + this.year + ", Fee = " + this.fee + "]";
    }
}

class Staff extends Person {
    private school: string;
    private pay: number;

    constructor(name: string, address: string, school: string, pay: number) {
        super(name, address);
        this.school = school;
        this.pay = pay;
    }

    public getSchool(): string {
        return this.school;
    }

    public setSchool(school: string): void {
        this.school = school;
    }

    public getPay(): number {
        return this.pay;
    }

    public setPay(pay: number): void {
        this.pay = pay;
    }

    public toString(): string {
        return "Staff[" + super.toString() + ", School = " + this.school + ", Pay = " + this.pay + "]";
    }
}

export = { Person, Student, Staff };
