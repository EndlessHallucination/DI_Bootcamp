const products = require('./products');

function findProduct(productName) {
    const product = products.find(
        product => product.name.toLowerCase() === productName.toLowerCase()
    );

    if (product) {
        console.log("Product found:");
        console.log(product);
    } else {
        console.log(`Product "${productName}" not found.`);
    }
}

findProduct("Laptop");
findProduct("Coffee Mug");
findProduct("Phone");