type User = {
    type: "user";
    name: string;
    age: number;
};

type Product = {
    type: "product";
    id: number;
    price: number;
};

type Order = {
    type: "order";
    orderId: string;
    amount: number;
};


function handleData(data: (User | Product | Order)[]): string[] {
    return data.map((item) => {
        switch (item.type) {
            case "user":
                return `Hello ${item.name}! You are ${item.age} years old.`;

            case "product":
                return `Product #${item.id} costs $${item.price}.`;

            case "order":
                return `Order ${item.orderId} has an amount of $${item.amount}.`;

            default:
                return "Unknown data type.";
        }
    });
}

const data: (User | Product | Order)[] = [
    {
        type: "user",
        name: "John",
        age: 30,
    },
    {
        type: "product",
        id: 101,
        price: 49.99,
    },
    {
        type: "order",
        orderId: "ORD123",
        amount: 150,
    },
];

console.log(handleData(data));