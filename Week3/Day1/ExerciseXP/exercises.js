//#1
const people = ["Greg", "Mary", "Devon", "James"];

const i = people.indexOf("Greg");
people.splice(i, 1);
console.log(people);

const i1 = people.indexOf("James")
people.splice(i1, 1, "Jason")
console.log(people);

people.push("Vasa")
console.log(people)

console.log(people.indexOf("Mary"))

people.slice(1, people.length - 1)
people.indexOf("Foo")
//will return -1 that means there is no such element in array

let last = people[people.length - 1];
console.log(last);
//index of the last element will be array.length -1 bc array starts from 0 


for (let i = 0; i < people.length; i++) {
    console.log(people[i])
}

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Devon") break;
}

//#2
const colors = ["green", "blue", "aquamarine", "yellow", "black"];
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My ${i + 1}${suffixes[i]} choice is ${colors[i]}`);
}

//#3
const prompt = require("prompt-sync")();

let number = Number(prompt("Enter a number: "));

while (isNaN(number) || number < 10) { 
    number = Number(prompt("Number is smaller than 10. Enter a new number: "));
}

console.log("Your number is:", number);

//#4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent: {
        sarah: [3, 990],
        dan: [4, 1000],
        david: [1, 500],
    },
}
console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor, building.numberOfAptByFloor.thirdFloor);
console.log(
  building.nameOfTenants[1],
  building.numberOfRoomsAndRent.dan[0]
);

const {
    numberOfRoomsAndRent: {
        sarah: [, sarahRent],
        dan: [, danRent],
        david: [, davidRent],
    },
} = building;

if (sarahRent + davidRent > danRent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}

console.log(building.numberOfRoomsAndRent.dan);

//#5
const family = {
    "Vasa": "son",
    "Eva": "daughter"
}
for (const key in family) {
    console.log(key);
}
for (const key in family) {
    let value = family[key]
    console.log(value);
}

//#6
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'reindeer'
}

let s = "";
const keys = Object.keys(details);

for (let i = 0; i < keys.length; i++){
    const key = keys[i]
    s += key + ' ' + details[key] + ' '
}
console.log(s);

// #7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
const name = names
    .map(n=>n[0])
    .sort()
    .join('')
console.log(name);


