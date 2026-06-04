//EXERCISE 1

// #1.1
// 3

// #1.2
// Error - const cannot be reassigned

// #2.1
// 0
// 5

// #2.2
// Error - const cannot be reassigned

// #3.1
// hello

// #4.1
// test

// #4.2
// test

// #5.1
// 5
// 2

// #5.2
// 5
// 2

//EXERCISE 2

winBattle = () => {
  return true;
};

var experiencePoints = winBattle
  ? (experiencePoints = 10)
  : (experiencePoints = 1);

console.log(experiencePoints);

//EXERCISE 3

isString = (i) => {
  if (typeof i == typeof "") return true;
  else return false;
};

console.log(isString("hello"));
console.log(isString([1, 2, 4, 0]));

//EXERCISE 4

sum = (a, b) => a + b;

console.log(sum(1, 2));

//EXERCISE 5

// Function Declaration
function kilogramsToGrams(weight) {
  return weight * 1000;
}

console.log(kilogramsToGrams(2));

// Function Expression
const kilogramsToGramsExpr = function (weight) {
  return weight * 1000;
};

console.log(kilogramsToGramsExpr(3));

// Function declarations are hoisted, while function expressions are not.

// Arrow Function
const kilogramsToGramsArrow = (weight) => weight * 1000;

console.log(kilogramsToGramsArrow(4));

//EXERCISE 6

(function sentence(number, name, location, job) {
  const p = document.createElement("p");
  p.innerText = `You will be a ${job} in ${location}, and married to ${name} with ${number} kids.`;
  document.body.appendChild(p);
})(3, "john", "denver", "builder");

//EXERCISE 7

