function publicBusFare(totalPeople) {
    if (typeof totalPeople !== 'number') {
        return 'Enter an integer number.';
    }
    else if (totalPeople <= 61) {
        return 'No public bus is required.';
    }
    else {
        const busCapacity = 50;
        const microbusCapacity = 11;
        const remainingPeople = totalPeople - busCapacity - microbusCapacity;
        const remainingPeopleCost = remainingPeople * 250;
        return remainingPeopleCost;
    }
}
console.log(publicBusFare(62));
console.log(publicBusFare(61));
console.log(publicBusFare('61'));