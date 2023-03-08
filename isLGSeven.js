// A simple function about if, if-else conditional related problem.
function isLGSeven(number) {
    if (typeof number !== 'number') {
        return 'Enter an integer number.'
    }
    else {
        const subtract7 = number - 7;
        if (subtract7 < 7) {
            return subtract7;
        }
        else if (subtract7 >= 7) {
            return number * 2;
        }
        else {

        }
    }
}
// const result1 = isLGSeven(6);
// const result2 = isLGSeven(-15);
// const result3 = isLGSeven(15);
// const result4 = isLGSeven('20');
// const result5 = isLGSeven(true);
// const result6 = isLGSeven(undefined);
// console.log(result1, result2, result3);
// console.log(result4, result5, result6);