// A function about common if, if-else conditional operations.
function gemsToDiamond(friend1Gems, friend2Gems, friend3Gems) {
    if (arguments.length !== 3) {
        return 'Provide 3 parameters.';
    }
    else if (typeof friend1Gems !== 'number' || typeof friend2Gems !== 'number' || typeof friend3Gems !== 'number') {
        return 'Enter an integer number.';
    }
    else {
        const multiply21 = friend1Gems * 21;
        const multiply32 = friend2Gems * 32;
        const multiply43 = friend3Gems * 43;
        const totalGems = multiply21 + multiply32 + multiply43;
        if (totalGems >= 2000) {
            return totalGems - 2000;
        }
        else if (totalGems < 2000) {
            return totalGems;
        }
    }
}
// const result1 = gemsToDiamond(1, 1, 1);
// const result2 = gemsToDiamond(20, 200, 50);
// const result3 = gemsToDiamond(100, 5, 1);
// const result4 = gemsToDiamond('100', 5, 1);
// const result5 = gemsToDiamond(15, 20);
// console.log(result1, result2, result3);
// console.log(result4, result5);