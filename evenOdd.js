// A function about checking weather the length of a string is even or odd.
function evenOdd(string) {
    if (typeof string !== 'string') {
        return 'Enter a string.';
    }
    else {
        if (string.length % 2 === 0) {
            return 'even';
        }
        else {
            return 'odd';
        }
    }
}
// const result1 = evenOdd('Phero');
// const result2 = evenOdd('Batch7');
// const result3 = evenOdd('chatgtp');
// let javaScript;
// const result4 = evenOdd(javaScript);
// const result5 = evenOdd(15);
// const result6 = evenOdd(false);
// console.log(result1, result2, result3);
// console.log(result4, result5, result6);