let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    paid: true,
    meansOfPayment: ["cash", "creditCard"],
  },
};

const displayGroceries = () => {
  groceries.fruits.forEach((fruit) => {
    console.log(fruit);
  });
};

const cloneGroceries = () => {
  let user = client;

  client = "Betty";

  console.log(user);   // John
  console.log(client); // Betty

  let shopping = groceries;

  groceries.totalPrice = "35$";

  console.log(shopping.totalPrice); // 35$

  groceries.other.paid = false;

  console.log(shopping.other.paid); // false
};

displayGroceries();
cloneGroceries();

// user does not change when client changes because strings are primitive values.
// user gets its own copy of "John".
// shopping does reflect changes because objects are copied by reference.
// Both shopping and groceries point to the same object in memory.
