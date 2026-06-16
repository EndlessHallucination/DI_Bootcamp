//1
function printLine() {
    console.log("Hello, World!");
}

printLine()

//2
let age: number = 10;
let str: string = 'I am'

console.log(str, age);

//3
let id: number | string

//4
function checkNumber(n: number) {
    if (n > 0) {
        return `number is positive`
    } else if (n === 0) {
        return `number is zero`
    }
    else {
        return `number is negative`
    }
}
console.log(checkNumber(0));
console.log(checkNumber(-10))
console.log(checkNumber(10))

//5
function getDetails(name: string, age: number): [string, number, string] {
    return [name, age, `Hello, ${name}! You are ${age} years old.`];
}
const details = getDetails("Alice", 25);
console.log(details)

//6
type Person = { name: string, age: number }

function createPerson(name: string, age: number): Person {
    return { name, age }
}
let person = createPerson('vas', 10)
console.log(person);

//7
// const input = document.getElementById("username") as HTMLInputElement | null;

// if (input) {
//     input.value = "Alice";
// }

const input = document.getElementById("username") as HTMLInputElement;

input.value = "Alice";

//8
function getAction(role: string): string {
    switch (role) {
        case "admin":
            return "Manage users and settings";

        case "editor":
            return "Edit content";

        case "viewer":
            return "View content";

        case "guest":
            return "Limited access";

        default:
            return "Invalid role";
    }
}

console.log(getAction("admin"));   // Manage users and settings
console.log(getAction("editor"));  // Edit content
console.log(getAction("viewer"));  // View content
console.log(getAction("guest"));   // Limited access
console.log(getAction("unknown")); // Invalid role

//9
function greet(): string;
function greet(name: string): string;

function greet(name: string = "Guest"): string {
  return `Hello, ${name}!`;
}

console.log(greet());        // Output: Hello, Guest!
console.log(greet("Alice")); // Output: Hello, Alice!