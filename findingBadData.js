// A function about checking the length of negative numbers in an array of both positive and negative numbers.
function findingBadData(array) {
    if (Array.isArray(array) !== true) {
        return 'Enter an array of numbers.';
    }
    else {
        let badData = [];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (element < 0) {
                badData.push(element);
            }
        }
        return badData.length;
    }
}
// const result1 = findingBadData([1, 2, 5]);
// const result2 = findingBadData([2, -5, -7, -13]);
// const result3 = findingBadData([-4, -9, -5, -33, -55]);
// const result4 = findingBadData('10, -11, 12');
// const result5 = findingBadData(13);
// const result6 = findingBadData({});
// console.log(result1, result2, result3);
// console.log(result4, result5, result6);