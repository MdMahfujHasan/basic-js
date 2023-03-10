function sum() {
    let sum = 0;
    for (let i = 1; i <= 5; i++) {
        sum += i;
    }
    return sum;
}
console.log(sum());

let sum = 0;
for (let i = 5; i >= 1; i--) {
    sum += i;
}
console.log(sum);

function sum(i) {
    if (i == 1) {
        return 1;
    }
    return i + sum(i - 1);
}
const result = sum(5);
console.log(result);

let factorial = 1;
for (let i = 5; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial);

function factorial(i) {
    if (i == 1) {
        return 1;
    }
    return i * factorial(i - 1);
}
// const result = factorial(5);
console.log(result);

/*
factorial(5) --> 5 * factorial(4)
factorial(4) --> 5 * 4 * factorial(3)
factorial(3) --> 5 * 4 * 3 * factorial(2)
factorial(2) --> 5 * 4 * 3 * 2 * factorial(1)
--> 5 * 4 * 3 * 2 * 1 (i == 1 --> return 1)
*/

function sum(num1, num2) {
    console.log(num1, num2);
    console.log(arguments);
    console.log(arguments[2]);
}
sum(3, 4, 5, 6, 7);

const numbers = [10, 11, 12, 13, 14];
for (const number of numbers) {
    console.log(number);
}

const products = [
    { id: 1, name: 'iPhone', brand: 'apple', price: 100000 },
    { id: 2, name: 'onePlus phone', brand: 'apple', price: 20000 },
    { id: 3, name: 'laptop f35', brand: 'apple', price: 360000 },
    { id: 4, name: 'tablet 19s', brand: 'apple', price: 40000 },
    { id: 5, name: 'nokia phone', brand: 'apple', price: 12000 },
    { id: 6, name: 'ipad 365', brand: 'apple', price: 51000 },
    { id: 7, name: 'Samsung s20', brand: 'apple', price: 95000 },
    { id: 8, name: 'Phone of 2023', brand: 'apple', price: 13500 }
]
function searchPhone(products, search) {
    let matched = [];
    for (const product of products) {
        // console.log(product);
        const productsName = product.name;
        if (productsName.toLowerCase().includes(search.toLowerCase()) === true) {
            // matched.push(productsName);
            matched.push(product);
        }
    }
    return matched;
}
const matchedProducts = searchPhone(products, 'phone');
console.log(matchedProducts);