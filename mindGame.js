// A basic javaScript operation related problem. (+, -, *, /)
function mindGame(number) {
    if (typeof number !== 'number') {
        return 'Enter an integer number.';
    }
    else {
        const multiply3 = number * 3;
        const add10 = multiply3 + 10;
        const divide2 = add10 / 2;
        const subtract5 = divide2 - 5;
        return subtract5;
    }
}
// const result1 = mindGame(5);
// const result2 = mindGame(50);
// const result3 = mindGame(33);
// const result4 = mindGame('10');
// const result5 = mindGame(true);
// const result6 = mindGame({});
// console.log(result1, result2, result3);
// console.log(result4, result5, result6);