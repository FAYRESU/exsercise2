class Customers {
  private name: string;
  private member: boolean = false;  // Default value
  private memberType: string = "";  // Default value

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public isMember(): boolean {
    return this.member;
  }

  public setMember(member: boolean): void {
    this.member = member;
  }

  public getMemberType(): string {
    return this.memberType;
  }

  public setMemberType(type: string): void {
    this.memberType = type;
  }

  public toString(): string {
    return `Customer[name=${this.name}, member=${this.member}, memberType=${this.memberType}]`;
  }
}

class Visit {
  private customer: Customers;  // Ensure the correct type is used
  private date: Date;
  private serviceExpense: number = 0;
  private productExpense: number = 0;

  constructor(name: string, date: Date) {
    this.customer = new Customers(name);  // Correct instantiation
    this.date = date;
  }

  public getName(): string {
    return this.customer.getName();
  }

  public setMemberStatus(isMember: boolean): void {
    this.customer.setMember(isMember);  // Correct method call
  }

  public getServiceExpense(): number {
    return this.serviceExpense;
  }

  public setServiceExpense(ex: number): void {
    this.serviceExpense = ex;
  }

  public getProductExpense(): number {
    return this.productExpense;
  }

  public setProductExpense(ex: number): void {
    this.productExpense = ex;
  }

  public getTotalExpense(): number {
    return this.serviceExpense + this.productExpense;
  }

  public toString(): string {
    return `Visit[customer=${this.customer.toString()}, date=${this.date}, serviceExpense=${this.serviceExpense}, productExpense=${this.productExpense}]`;
  }
}


class DiscountRate {
  private static serviceDiscountPremium: number = 0.2;
  private static serviceDiscountGold: number = 0.15;
  private static serviceDiscountSilver: number = 0.1;

  private static productDiscountPremium: number = 0.1;
  private static productDiscountGold: number = 0.1;
  private static productDiscountSilver: number = 0.1;

  public static getServiceDiscountRate(type: string): number {
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

  public static getProductDiscountRate(type: string): number {
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

export = {DiscountRate, Customers, Visit};
