function validateUnionType(value: any, allowedTypes: string[]): boolean {

    return allowedTypes.includes(typeof (value))
}

let age = 25;
let isStudent = true;
let hobbies = ["reading", "coding"];

console.log(validateUnionType(age, ["number", "string"]));      // true
console.log(validateUnionType(isStudent, ["boolean"]));         // true
console.log(validateUnionType(hobbies, ["object"]));            // true
console.log(validateUnionType(hobbies, ["string", "number"]));  // false