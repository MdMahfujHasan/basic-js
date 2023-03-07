function oilPrice(dieselQuantity, petrolQuantity, octaneQuantity) {
    if (dieselQuantity < 0 || petrolQuantity < 0 || octaneQuantity < 0 || typeof dieselQuantity !== 'number' || typeof petrolQuantity !== 'number' || typeof octaneQuantity !== 'number') {
        return 'Enter a positive integer number.';
    }
    else {
        const dieselPrice = 114;
        const petrolPrice = 130;
        const octanePrice = 135;

        const totalDieselPrice = dieselQuantity * dieselPrice;
        const totalPetrolPrice = petrolQuantity * petrolPrice;
        const totalOctanePrice = octaneQuantity * octanePrice;

        return totalDieselPrice + totalPetrolPrice + totalOctanePrice;
    }
}
console.log(oilPrice(1, 0, 0));
console.log(oilPrice(0, 1, 0));
console.log(oilPrice(0, 0, 1));
console.log(oilPrice(1, 1, 1));
console.log(oilPrice(-1, 1, 1));
console.log(oilPrice(1, 1, '1'));