// #1

function displayNumbersDivisible(divisor) {
    let sum = 0
    for (let index = 0; index <= 500; index++) {
        if (index % divisor === 0) {
            console.log(index);
            sum += index
        }

    }
    console.log(sum)
}

displayNumbersDivisible(5)

// #2
const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

let shoppingList = ["banana", "orange", "apple"]

function myBill() {
    let total = 0;

    for (let i = 0; i < shoppingList.length; i++) {
        const item = shoppingList[i];

        if (item in stock && stock[item] > 0) {
            total += prices[item];
            stock[item]--;
        }
    }

    return total;
}

console.log(myBill());

// #3
function changeEnough(itemPrice, amountOfChange) {
    let sum = 0;

    const values = [0.25, 0.10, 0.05, 0.01];

    for (let i = 0; i < amountOfChange.length; i++) {
        sum += amountOfChange[i] * values[i];
    }

    return sum >= itemPrice;
}

console.log(changeEnough(14.11, [2, 100, 0, 0]));

// #4

const prompt = require("prompt-sync")();

function hotelCost(nights) {
    return nights * 140;
}

function planeRideCost(destination) {
    destination = destination.toLowerCase();

    if (destination === "london") return 183;
    if (destination === "paris") return 220;
    return 300;
}

function rentalCarCost(days) {
    let cost = days * 40;

    if (days > 10) {
        cost *= 0.95; 
    }

    return cost;
}

function totalVacationCost() {
    let nights = Number(prompt("How many nights in hotel?"));
    while (isNaN(nights) || nights <= 0) {
        nights = Number(prompt("Enter a valid number of nights:"));
    }

    let destination = prompt("Where are you flying?");
    while (!destination || typeof destination !== "string") {
        destination = prompt("Enter a valid destination:");
    }

    let days = Number(prompt("How many days renting a car?"));
    while (isNaN(days) || days <= 0) {
        days = Number(prompt("Enter a valid number of days:"));
    }

    const hotel = hotelCost(nights);
    const plane = planeRideCost(destination);
    const car = rentalCarCost(days);

    const total = hotel + plane + car;

    console.log(`Hotel: $${hotel}, Plane: $${plane}, Car: $${car}`);
    console.log(`Total vacation cost: $${total}`);

    return total;
}

totalVacationCost();

