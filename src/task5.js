function applyDiscountAndId(fruits) {

    fruits.forEach((fruit, index) => {
        fruit.id = index + 1;
    });

    return fruits.map(fruit => {
        const discountedPrice = fruit.price * 0.8;
        return {...fruit, price: discountedPrice};
    });
}

// Приклад використання:
const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 },
];

const discountedFruits = applyDiscountAndId(fruits);
console.log(discountedFruits);
