const _ = require('lodash');
const math = require('./math');

console.log(math.add(5, 3));
console.log(math.multiply(4, 6));

const numbers = [1, 2, 3, 4, 5];

console.log(_.sum(numbers));
console.log(_.shuffle(numbers));