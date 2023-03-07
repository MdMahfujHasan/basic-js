const arr = [1, 2, 3, 4, 5];
const num = 5;
console.log(Array.isArray(arr));
console.log(Array.isArray(num));

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const newArray = array.splice(2, 4, 12, 13, 14);
console.log(newArray);
console.log(array);

const alphabets = ['a', 'b', 'c', 'd', 'a', 'e', 'b', 'f', 'g', 'a', 'c'];
function removeDuplicate(alphabets) {
    const newAlphabets = []
    for (let i = 0; i < alphabets.length; i++) {
        const allAlphabets = alphabets[i];
        if (newAlphabets.includes(allAlphabets) === false) {
            newAlphabets.push(allAlphabets);
        }
    }
    return newAlphabets;
}
const uniqueAlphabets = removeDuplicate(alphabets);
console.log(uniqueAlphabets);

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i, 'foobar');
    }
    else if (i % 3 === 0) {
        console.log(i, 'foo');
    }
    else if (i % 5 === 0) {
        console.log(i, 'bar');
    }
    else {
        console.log(i);
    }
}

function priceCalc(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWoodPrice = 3;
    const perTableWoodPrice = 10;
    const perBedWoodPrice = 50;

    const chairPrice = perChairWoodPrice * chairQuantity;
    const tablePrice = perTableWoodPrice * tableQuantity;
    const bedPrice = perBedWoodPrice * bedQuantity;

    return chairPrice + tablePrice + bedPrice;
}

const totalPrice = priceCalc(8, 3, 1);
console.log(totalPrice);

const phones = [
    { name: 'Nokia', price: 23000, storage: '8GB', camera: '8MP', color: 'black', quantity: 3 },
    { name: 'Oppo', price: 32000, storage: '16GB', camera: '16MP', color: 'white', quantity: 4 },
    { name: 'iPhone', price: 90000, storage: '256GB', camera: '48MP', color: 'gold', quantity: 1 },
    { name: 'OnePlus', price: 48000, storage: '128GB', camera: '32MP', color: 'black', quantity: 5 },
    { name: 'HTC', price: 22000, storage: '32GB', camera: '12MP', color: 'brown', quantity: 2 }
]

function cheapestPhonePrice(phones) {
    let cheapestPrice = phones[0].price;
    for (let i = 0; i < phones.length; i++) {
        const phone = phones[i];
        // console.log(phone);
        if (phone.price < cheapestPrice) {
            cheapestPrice = phone.price;
        }
    }
    return cheapestPrice;
}

const myBudget = cheapestPhonePrice(phones);
console.log(myBudget);

function price(phones) {
    let price = 0
    for (let i = 0; i < phones.length; i++) {
        // price += phones[i].price; // total price without quantity
        price += phones[i].price * phones[i].quantity;
    }
    return price;
}
console.log(price(phones))

function ticketPrice(ticketQuantity) {
    if (ticketQuantity <= 0) {
        return 'Put a number equal or greater than 1.';
    }
    else if (ticketQuantity <= 100) {
        return ticketQuantity * 100;
    }
    else if (ticketQuantity <= 200) {
        const remaining = ticketQuantity - 100;
        const remainingPrice = remaining * 90;
        const totalPrice = 10000 + remainingPrice;
        return totalPrice;
    }
    else if (ticketQuantity > 200) {
        const remaining = ticketQuantity - 200;
        const remainingPrice = remaining * 70;
        const totalPrice = 19000 + remainingPrice;
        return totalPrice;
    }
}

console.log(ticketPrice(-1));
console.log(ticketPrice(11));
console.log(ticketPrice(101));
console.log(ticketPrice(201));