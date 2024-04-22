function createProduct(obj, callback) {
    obj.id = getId();
    callback(obj);
}

let counter = 1;
function getId() {
    return counter++;
}

function logProduct(product) {
    console.log("Product:", product);
}

function logTotalPrice(product) {
    const totalPrice = product.price * product.quantity;
    console.log("Total Price:", totalPrice);
}

// Приклад використання:
const product = { name: "Phone", price: 500, quantity: 2 };

createProduct(product, logProduct);
createProduct(product, logTotalPrice);
