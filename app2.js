// var num = [1, 2, 3, 4, 5]
// num.push(6);
// console.log(num); // [1, 2, 3, 4, 5, 6]

// var words = ['hi', 'hello', 'there'];
// words.push('here', 'way', true);
// console.log(words);
// words.pop();
// console.log(words);

// var words = [1, 2, 3, 4, 5];
// var element = words.pop();
// console.log(element); 5

// var numbers = [1, 2, 3];
// numbers.unshift(4, 5);
// console.log(numbers);

// var numbers = [1, 2, 3];
// var firstElement = numbers.shift();
// console.log(firstElement);
// console.log(numbers);

// console.log(5 < 6);
// console.log(5 > 6);
// console.log(5 == 5);
// console.log(5 == 6);
// console.log(5 != 6);
// console.log(5 != 5);
// console.log(5 >= 6);
// console.log(5 >= 6);

var fruits = ['Apple', 'Banana', 'Orange'];
// console.log('banana index is', fruits.indexOf('Banana'));
fruits.pop();
fruits.pop();
// console.log(fruits);
fruits.push('Mango');
// console.log(fruits);
fruits.push('Watermelon');
// console.log(fruits);
// var grade = [85, 66, 95, 56, 40];

// if (grade >= 80) {
//     console.log('A grade');
// }
// else if (grade >= 60) {
//     console.log('B grade');
// }
// else if (grade >= 50) {
//     console.log('C grade');
// }
// else if (grade >= 40) {
//     console.log('D grade');
// }
// else if (grade <= 39) {
//     console.log('F grade');
// }

var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2) {
    if (num1 > num3) {
        console.log('num1 is largest');
    }
    else if (num3 > num2) {
        console.log('num3 is largest');
    }
    else {
        console.log('num2 is largest')
    }
}
else {
    console.log('num2 is largest')
}
var side1 = 9;
var side2 = 8;
var side3 = 9;

if (side1 == side2) {
    console.log('side1 and side2 is isosceles');
}
else if (side2 == side3) {
    console.log('side2 and side3 is isosceles');
}
else {
    console.log('side1 and side3 is isosceles');
}