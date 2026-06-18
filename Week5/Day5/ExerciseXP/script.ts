//1
type Person = {
    name: string;
    age: number;
};

type Address = {
    street: string;
    city: string;
};

type PersonWithAddress = Person & Address;

const person1: PersonWithAddress = {
    name: "John",
    age: 30,
    street: "Main Street",
    city: "New York"
};

//2
function describeValue(value: number | string): string {
    if (typeof value === "number") {
        return "This is a number";
    }

    return "This is a string";
}

console.log(describeValue(10));
console.log(describeValue("hello"));

//3
let someValue: any = "Hello TypeScript";

let strValue = someValue as string;

console.log(strValue.toUpperCase());

//4
function getFirstElement(arr: (number | string)[]): string {
    return arr[0] as string;
}

console.log(getFirstElement(["hello", 10, 20]));
console.log(getFirstElement(["TypeScript", "JavaScript"]));

//5
function logLength<T extends { length: number }>(value: T): void {
    console.log(value.length);
}

logLength("Hello");
logLength([1, 2, 3, 4]);

//6
type Job = {
    position: string;
    department: string;
};

type Employee = Person & Job;

function describeEmployee(employee: Employee): string {
    if (employee.position === "Manager") {
        return `${employee.name} is a Manager in ${employee.department}`;
    }

    if (employee.position === "Developer") {
        return `${employee.name} is a Developer in ${employee.department}`;
    }

    return `${employee.name} works in ${employee.department}`;
}

//7
function formatInput<T extends { toString(): string }>(input: T): string {
    const formatted = (input.toString() as string).trim();

    return formatted;
}

