
//1
class Employee {
    constructor(
        private name: string,
        private salary: number,
        public position: string,
        protected department: string,
    ) { }

    getEmployeeInfo(): string {
        return `${this.name} ${this.position}`
    }
}

let emp = new Employee("vas", 10, "CEO", 'management')

console.log(emp.getEmployeeInfo())

//2
class Product {
    constructor(
        readonly id: number,
        public name: string,
        public price: number
    ) { }

    getProductInfo(): string {
        return `${this.name} ${this.price}`
    }
}

let prod = new Product(10, 'flower', 10)

console.log(prod.getProductInfo());
// prod.id = 20;
// Cannot assign to 'id' because it is a read-only property.ts

//3
class Animal {
    constructor(public name: string) { }

    makeSound(): string {
        return "some sound";
    }
}

class Dog extends Animal {
    override makeSound(): string {
        return "bark";
    }
}



let myDog = new Dog('Jacky')

console.log(myDog.makeSound())

//4
class Calculator {
    static add(a: number, b: number): number {
        return a + b
    }

    static subtract(a: number, b: number): number {
        return a - b
    }
}
const total = Calculator.add(1, 2)
const total2 = Calculator.subtract(10, 2)

//5
interface User {
    readonly id: number,
    name: string,
    email: string,
}

interface PremiumUser extends User {
    membershipLevel?: number
}

function printInfo(user: PremiumUser): string {
    return `${user.id}, ${user.name}, ${user.email}, ${user.membershipLevel}`
}

const newUser: PremiumUser = { id: 1, name: 'John', email: "email", membershipLevel: 10 }
printInfo(newUser);